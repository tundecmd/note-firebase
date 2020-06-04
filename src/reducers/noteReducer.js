import { useContext } from "react";
import { NoteContext } from "../contexts/noteContext";
import { EditNote, AddNote } from "./noteUtils";


export const noteReducer = (state, action) => {
    
    switch (action.type) {
        case 'ADD_NOTE':
        return [...state, { id: Math.random(), title: action.note.title, content: action.note.content }]
        case 'REMOVE_NOTE':
            return state.filter(note => note.id !== action.id);
        case 'DISPLAY_NOTE':
            return state.filter(note => note.id !== action.id);
        case 'EDIT_NOTE':
            return {
                ...state
            }
        default:
            return state;
    }
}


// [...state, {
//     title: action.note.title,
//     content: action.note.content,
//     id: Math.random()
// }]