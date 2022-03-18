import React, { useEffect, useState } from 'react'


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
    }
]


const DisplayLyricsList = () => {

    const [songs, setSongs] = useState(dummyData)

    function testClick() {
        console.log(songs[0].author);
    }



    return (
        <div className='displaySongsDiv' >
            <button onClick={testClick}> TestButton </button>
            <div className='songSearchBarDiv'>
                {/*add a searchbar here*/}
            </div>
            <div>
                {/*display all songs here*/}
            </div>

        </div>
    )




}

export default DisplayLyricsList;