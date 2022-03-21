import axios from 'axios';

export const ADD_SONG = 'ADD_SONG';
export const DELETE_SONG = 'DELETE_SONG';
export const EDIT_SONG = 'EDIT_SONG';



export const delSong = item => {
    return { type: DELETE_SONG, payload: item };
};

export const editSong = item => {
    return { type: EDIT_SONG, payload: item };
};

export const addSong = item => {
    return { type: ADD_SONG, payload: item };
};