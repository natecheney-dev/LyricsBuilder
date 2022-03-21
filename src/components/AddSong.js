import React, { useEffect, useState } from 'react'
import { addSong } from '../redux/actions/'
import { connect } from 'react-redux';
import './lyrics.css'
import MOCK_DATA from '../MOCK_DATA.json'

const AddSong = (props) => {


    const [songState, setSongState] = useState({
        id: Date.now(),
        songName: '',
        author: '',
        totalTime: '',
        lyrics: []
    })
    const [lyricsState, setLyricsState] = useState([{ lineNumber: '', words: '' },])
    const [counter, setCounter] = useState(1)



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('test123')
    }
    const handleChange = e => {
       



    }
    const handleLyricsChange = (index, event) => {
        
        const values = [...lyricsState];
        values[index][event.target.name] = event.target.value;
        values[index].lineNumber = index + 1;
        setLyricsState(values);

        // setLyricsState([
        //     ...lyricsState,
        //     lyricsState[index][event.target.name] = event.target.value,
        //     lyricsState[index].lineNumber = index + 1,
        // ])
        
    }
    const handleAddLine = () =>{
        setLyricsState([...lyricsState, {lineNumber: '', words: ''}])
    }

    const handleDelLine = (index) =>{
        const values = [...lyricsState];
        values.splice(index, 1);
        setLyricsState(values);
    };


    return (
        <div className="addSong_div">
            <form onSubmit={handleSubmit} className="addSong_form">
                <label htmlFor='song_name'>Song Name:</label>
                <input onChange={handleChange} value={songState.songName} name="songName" id="songName" />
                <label htmlFor='author'>Author:</label>
                <input onChange={handleChange} value={songState.author} name="author" id="author" />
                <label htmlFor='totalTime'>Total Time Length:</label>
                <input onChange={handleChange} value={songState.totalTime} name="totalTime" id="totalTime" />

                <div className='lyrics_div'>
                    {lyricsState.map((lyrics, index) =>
                    (<div key={index}>
                        <label htmlFor='lyricsText'>Lyrics for Line {index + 1}:</label>
                        <input onChange={event => handleLyricsChange(index, event)} name = 'words' type='LyricsText' value={lyricsState.words}/>
                        <button onClick={() => handleDelLine(index)}>-</button>
                    </div>)
                    )}
                    <div className='addLyrics_div'>
                        <button onClick={handleAddLine}>+</button>
                    </div>
                </div>
                <button type ='submit' >Add Song</button>
            </form>
        </div>
    )


}
const mapStateToProps = state => {
    return {
        songs: state.songs
    }
}

export default connect(mapStateToProps, { addSong })(AddSong);