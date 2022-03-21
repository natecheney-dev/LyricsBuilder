import { EDIT_SONG, DELETE_SONG, ADD_SONG} from '../actions'
import MOCK_DATA from '../../MOCK_DATA.json'

export const initialState = {
    songs: MOCK_DATA,
}


const reducer = (state = initialState, action)=>{
    switch(action.type){
        case DELETE_SONG:
            return{
                songs: state.songs.filter(item =>(action.payload !== item.id))
            }
        case EDIT_SONG:
            const editIndex = state.songs.findIndex(item => action.payload.id === item.id);
            state.songs[editIndex] = action.payload
            return{
                ...state,
                songs: state.songs
            }
        case ADD_SONG:
            return{
                songs: [
                    ...state.songs,
                    {
                        id: action.payload.id,
                        songName: action.payload.songName,
                        author: action.payload.author,
                        totalTime: action.payload.totalTime,
                        lyrics: action.payload.lyrics
                    }
                ]
            }
        default:
            return state
    }
}


export default reducer;