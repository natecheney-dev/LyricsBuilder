import { EDIT_SONG, DELETE_SONG, ADD_SONG, GET_LYRICS, GET_SONGS, ADD_LYRICS } from '../actions'
import MOCK_DATA from '../../MOCK_DATA.json'

export const initialState = {
    songs: [],
    lyrics: []
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LYRICS:
            return {
                lyrics: action.payload
            }
        case GET_SONGS:
            return {
                ...state,
                songs: action.payload
            }
        case DELETE_SONG:
            return {
                songs: state.songs.filter(item => (action.payload !== item.id))
            }
        case EDIT_SONG:
            const editIndex = state.songs.findIndex(item => action.payload.id === item.id);
            state.songs[editIndex] = action.payload
            return {
                ...state,
                songs: state.songs
            }
        case ADD_LYRICS:
            return {
                lyrics:[
                    ...state.lyrics,
                    {
                        song_id: action.payload.song_id
                        
                    }
                ]
            }
        case ADD_SONG:
            return {
                songs: [
                    ...state.songs,
                    {
                        id: action.payload.id,
                        songName: action.payload.songName,
                        author: action.payload.author,
                        totalTime: action.payload.totalTime,
                    }
                ]
            }
        default:
            return state
    }
}


export default reducer;