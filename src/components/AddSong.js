import React, { useEffect, useState } from 'react'
import { addSong, addLyrics } from '../redux/actions/'
import { connect } from 'react-redux';
import './lyrics.css'
import MOCK_DATA from '../MOCK_DATA.json'

const AddSong = (props) => {

    const [time, setTime] = useState({
        time_minutes: '',
        time_seconds: '',
    })

    const [songState, setSongState] = useState({
        id: '',
        songName: '',
        author: '',
    })
    const [lyricsState, setLyricsState] = useState([])
    const [counter, setCounter] = useState(0)
    const [itemVals, setItemVal] = useState([])
    const [anId, setAnId] = useState(Date.now())
    




    const handleSubmit = (e) => {
        e.preventDefault();

        const time_added = parseInt(time.time_minutes * 60) + parseInt(time.time_seconds);


        
        const merged = {
            id: anId,
            songName: songState.songName,
            author: songState.author,
            totalTime: time_added,
        }

       

        props.addSong(merged);
        props.addLyrics(lyricsState);

        setTime({
            time_minutes: '',
            time_seconds: '',
        })

        setSongState({
            id: '',
            songName: '',
            author: '',
        })

        setLyricsState([])
        
        setAnId(Date.now());
        setCounter(0)

    }
    const handleChange = e => {
        setSongState({
            ...songState,
            [e.target.name]: e.target.value
        });
    }

    const handleTime = e => {
        setTime({
            ...time,
            [e.target.name]: e.target.value
        })
    }

    const handleLyricsChange = (index, event) => {
        


        setItemVal([...lyricsState]);
        itemVals[index][event.target.name] = event.target.value;
        itemVals[index].lineNumber = index + 1;
        itemVals[index].song_id = anId
        setLyricsState(itemVals);
        setCounter(index);


    }
    const handleAddLine = () => {
        setLyricsState([...lyricsState, { lineNumber: '', words: '' }])
    }

    const handleDelLine = () => {
        const values = [...lyricsState];
        values.splice(counter, 1);
        setLyricsState(values);
        setCounter(counter - 1)
    };


    return (
        <div className="addSong_div">
            <form onSubmit={handleSubmit} className="addSong_form">
                <label htmlFor='song_name'>Song Name:</label>
                <input onChange={handleChange} value={songState.songName} name="songName" id="songName" />
                <label htmlFor='author'>Author:</label>
                <input onChange={handleChange} value={songState.author} name="author" id="author" />
                <div className='time_div'>
                    <label htmlFor='totalTime'>Total Time Length:</label>
                    <input onChange={handleTime} placeholder="Minutes" value={time.time_minutes} name="time_minutes" id="time_minutes" />
                    <input onChange={handleTime} placeholder="Seconds" value={time.time_seconds} name="time_seconds" id="time_seconds" />
                </div>
                <div className='lyrics_div'>
                <label htmlFor='lyricsStarter'>Add Lyrics:</label>
                    {lyricsState.map((lyrics, index) =>
                    (<div key={index}>
                        <label htmlFor='lyricsText'>Lyrics for Line {index + 1}:</label>
                        <input onChange={event => handleLyricsChange(index, event)} name='words' id='words' value={lyricsState.words} />
                    </div>)
                    )}
                    <div className='addLyrics_div'>
                        <button type='button' onClick={handleAddLine}>+</button>
                        <button type='button' onClick={handleDelLine}>-</button>
                    </div>
                </div>
                <button type='submit' >Add Song</button>
            </form>
        </div>
    )


}
const mapStateToProps = state => {
    return {
        songs: state.songs
    }
}

export default connect(mapStateToProps, { addSong, addLyrics })(AddSong);