import React, { useEffect, useState } from 'react'
import './lyrics.css'
import MOCK_DATA from '../MOCK_DATA.json'

const dummyData = [
    {
        songName: "It's My Life", author: "Bon Jovi", totalTime: 244,
        lyrics: [
            { lineNumber: 1, words: "This ain'ta solng for the broken-hearted", startTime: 0, endTime: 5 },
            { lineNumber: 2, words: "No silent prayer for faith-departed", startTime: 5, endTime: 9 },
            { lineNumber: 3, words: "And I ain't gonna be just a face in the crowd", startTime: 9, endTime: 15 },
            { lineNumber: 4, words: "You're gonna hear my voice when I shout it out loud", startTime: 15, endTime: 22 },
            //rest of song lyrics...
        ],
    },
    {
        songName: "Test", author: "Test", totalTime: 144,
        lyrics: [
            { lineNumber: 1, words: "Test", startTime: 0, endTime: 69 },

            //rest of song lyrics...
        ],
    },
    {
        songName: "Doo", author: "Dee", totalTime: 144,
        lyrics: [
            { lineNumber: 1, words: "Test", startTime: 0, endTime: 69 },

            //rest of song lyrics...
        ],
    },
    {
        songName: "Free", author: "Willie", totalTime: 144,
        lyrics: [
            { lineNumber: 1, words: "Test", startTime: 0, endTime: 69 },

            //rest of song lyrics...
        ],
    },
    {
        songName: "How", author: "Bow", totalTime: 144,
        lyrics: [
            { lineNumber: 1, words: "Test", startTime: 0, endTime: 69 },

            //rest of song lyrics...
        ],
    }
]


const DisplayLyricsList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [songs, setSongs] = useState(MOCK_DATA)

    function testClick() {

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
                {songs.filter((value) => {
                    if(searchTerm === ''){
                        return value
                    }
                    else if((value.author.toLowerCase().includes(searchTerm.toLowerCase()) || value.songName.toLowerCase().includes(searchTerm.toLowerCase()) )){
                        return value
                    }
                }).map((value, key) => {
                    return <div className='individualDiv'>
                        <p>{value.author}</p>
                        <p>{value.songName}</p>
                    </div>
                })}
            </div>

        </div>
    )




}

export default DisplayLyricsList;