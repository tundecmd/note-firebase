import React, { useContext } from 'react';
import { NoteContext } from '../contexts/noteContext';

export const EditNote = id => {

    const { notes, setTitle, dispatch, setContent, setEditItem } = useContext(NoteContext);
    console.log(setTitle)
    
    const filteredNotes = notes.filter(note => note.id !== id);
    const selectedNote = notes.find(note => note.id === id);
    
    dispatch(filteredNotes); 

    setTitle(selectedNote.title);
    setContent(selectedNote.content);
    setEditItem(true);

}