import React, { useEffect, useState } from 'react'
import './lyrics.css'
import MOCK_DATA from '../MOCK_DATA.json'
import { useNavigate } from 'react-router'
import { connect } from 'react-redux';
import { addSong, getSongs, getLyrics } from '../redux/actions';




const DisplayLyricsList = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [songsList, setSongsList] = useState(props.songs)
    let navigate = useNavigate();

    useEffect(() => {
        console.log(props.getSongs())

      }, []);

      

    function routeToPlay(e) {
        console.log(e.target.value)
        console.log(props.songs)
        navigate('/song', { state: props.songs[e.target.value]})
    }

    function test(){
        props.getSongs()
    }




    return (
        <div className='displaySongsDiv' >

            <div className='songSearchBarDiv'>
                <h2>Searchbar</h2>
                <input type='text' placeholder="Search..." onChange={event => { setSearchTerm(event.target.value) }} />
                <div className='search'>
                </div>
            </div>
            <div className='mappedSongs'>
                {props.songs.filter((value, key) => {
                    if (searchTerm === '') {
                        return value
                    }
                    else if ((value.author.toLowerCase().includes(searchTerm.toLowerCase()) || value.songName.toLowerCase().includes(searchTerm.toLowerCase()))) {
                        return value
                    }
                }).map((value, key) => {
                    return <div className='individualDiv'>
                        <p>{value.author}</p>
                        <p>{value.songName}</p>
                        <button onClick={routeToPlay} value={key}>View</button>
                    </div>
                })}
            </div>
                <button onClick={test}>A BUTTON</button>
        </div>
    )
}
const mapStateToProps = state => {
    
    return {
        songs: state.songs
        
    }
}

export default connect(mapStateToProps, { addSong,getLyrics, getSongs })(DisplayLyricsList);