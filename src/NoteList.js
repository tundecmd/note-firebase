import React, { useContext } from 'react';
import './note-list.css';
import { NoteContext } from './contexts/noteContext';
import Note from "./Note";
import NoteDetail from './NoteDetail';


const NoteList = () => {
    const { filteredNotes, notes } = useContext(NoteContext);
    return (
        <div style={{marginTop: '50px'}}>
            {
                filteredNotes ? filteredNotes.map(note => {
                    return (
                        <Note key={note.id} note={note} />
                    )
                }) : notes
            }
        </div>
    );
}
 
export default NoteList; 