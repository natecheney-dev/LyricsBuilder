import React, { useEffect, useState } from 'react'
import './lyrics.css'
import MOCK_DATA from '../MOCK_DATA.json'
import { useNavigate } from 'react-router'




const DisplayLyricsList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [songs, setSongs] = useState(MOCK_DATA)
    let navigate = useNavigate();

    function routeToPlay(e) {
        navigate('/song', { state: MOCK_DATA[e.target.value]})
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
                {songs.filter((value, key) => {
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

        </div>
    )




}

export default DisplayLyricsList;