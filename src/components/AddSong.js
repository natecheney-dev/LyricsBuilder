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
                <div className='song_title'>
                    <h1>Add A Song</h1>
                </div>
                <div className='addSong_form_top'>
                    <div className='addSong_form_top_one'>
                        <label htmlFor='song_name'>Song Name:</label>
                        <input placeholder="Song Name..." onChange={handleChange} value={songState.songName} name="songName" id="songName" />
                        <label htmlFor='author'>Author:</label>
                        <input placeholder="Author..." onChange={handleChange} value={songState.author} name="author" id="author" />

                    </div>
                    <div className='addSong_form_top_two'>
                        <label htmlFor='totalTime'>Total Time Length:</label>
                        <input onChange={handleTime} placeholder="Minutes..." value={time.time_minutes} name="time_minutes" id="time_minutes" />
                        <input onChange={handleTime} placeholder="Seconds..." value={time.time_seconds} name="time_seconds" id="time_seconds" />
                    </div>
                </div>
                <div className='addSong_form_bottom'>
                    <div className='lyrics_div'>
                        <div>
                            <label className='lyricsStater' htmlFor='lyricsStarter'>Add Lyrics:</label>
                            {lyricsState.map((lyrics, index) =>
                            (<div key={index}>
                                {/* <label htmlFor='lyricsText'>Lyrics for Line {index + 1}:</label> */}
                                <input placeholder={`Lyrics for Line ${index + 1}`} className='words' onChange={event => handleLyricsChange(index, event)} name='words' id='words' value={lyricsState.words} />
                            </div>)
                            )}
                            <div className='addLyrics_div'>
                                <button type='button' onClick={handleAddLine}>Add Line</button>
                                <button type='button' onClick={handleDelLine}>Delete Line</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='addSong_button'>
                    <button className='submit_button' type='submit' >Add Song</button>
                </div>
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