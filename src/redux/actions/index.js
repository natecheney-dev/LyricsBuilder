import axios from 'axios';

export const ADD_SONG = 'ADD_SONG';
export const DELETE_SONG = 'DELETE_SONG';
export const EDIT_SONG = 'EDIT_SONG';

export const GET_SONGS = 'GET_SONGS'
export const GET_LYRICS = 'GET_LYRICS'
export const GET_SONG_LYRICS = "GET_SONG_LYRICS"
export const ADD_LYRICS = 'ADD_LYRICS'

const doParsing = (data) => {
    let testObj = {}
    let oldArray = data
    let newArray = []
    let newLine = ''


    for (let i = 0; i < oldArray.length; i++) {

        // for (let j = 0; j < 4; j++) {
        //     if (j !== 1 && j !== 3) {
        //         newLine = oldArray[i].lyrics.replace(/:/g, '')
        //         console.log('test: ', j)
        //     }
        // }



        let lyricsParse = JSON.parse(oldArray[i].lyrics)

        for (let j = 0; j < lyricsParse.length; j++) {

            lyricsParse[j]['lineNumber'] = lyricsParse[j]['lineNumber:']
            lyricsParse[j]['words'] = lyricsParse[j]['words:']
            delete lyricsParse[j]['lineNumber:'];
            delete lyricsParse[j]['words:'];


        }





        newArray.push({
            songName: oldArray[i].songName,
            author: oldArray[i].author,
            totalTime: oldArray[i].totalTime,
            lyrics: lyricsParse
        })

    }
    return newArray

}

export const getSongs = () => dispatch => {

    axios.get("http://localhost:8000/api/songs")
        .then(resp => {
            dispatch(({ type: GET_SONGS, payload: doParsing(resp.data) }))
        })
        .catch(err => {
            console.log('error stuff')
        })



}

export const getSongLyrics = () => dispatch => {

}

export const getLyrics = () => dispatch => {
    axios.get("http://localhost:8000/api/songs")
        .then(resp => {
            dispatch({ type: GET_LYRICS, payload: resp.data });
        })
        .catch(err => {
            console.log('error stuff')
        })
}






export const delSong = item => {
    return { type: DELETE_SONG, payload: item };
};

export const editSong = item => {
    return { type: EDIT_SONG, payload: item };
};

export const addSong = (item, lyrics) => dispatch => {

    axios.post('http://localhost:8000/api/songs', item)
        .then(resp => {
            console.log("test123:", item);
            dispatch({ type: ADD_SONG, payload: item });
        })
        .catch(resp => {
            console.log('fail', resp)
        })

        
   


        
};

export const addLyrics = (item) => dispatch => {
    console.log("test123:", item);
    axios.post('http://localhost:8000/api/lyrics', item)
        .then(resp => {
            dispatch({ type: ADD_LYRICS, payload: item });

        })
        .catch(resp => {
            console.log('fail', resp)
        })

};