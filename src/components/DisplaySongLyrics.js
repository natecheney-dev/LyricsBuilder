import React, { useEffect, useState } from 'react'
import './lyrics.css'
import MOCK_DATA from '../MOCK_DATA.json'
import { useLocation } from 'react-router-dom'





const DisplaySongLyrics = (props) => {
    const location = useLocation();

    console.log(location.state.lyrics)

    return (
        <div className='renderLyrics' >
            <div className='renderLyricsTop'>
                <h2>{location.state.songName}</h2>
                <h2>{location.state.author}</h2>
            </div>
            <div className='renderLyricsBottom'>
                {location.state.lyrics.map((item, key) => {
                    return <div className='lyricsLine'>
                        <p>{item.lineNumber}</p>
                        <p>{item.words}</p>
                    </div>
                })}
            </div>


        </div>
    )




}

export default DisplaySongLyrics;