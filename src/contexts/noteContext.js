import React, { createContext, useState, useEffect, useReducer } from 'react';
import NewNoteForm from '../new-note-form';
import { noteReducer } from '../reducers/noteReducer';
import { auth } from '../firebase/firebase';

export const NoteContext = createContext();

const NoteContextProvider = (props) => {
    // state declaration
    const [searchNote, setSearchNote] = useState("");

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [editItem, setEditItem] = useState(false);

    const [currentUser, setCurrentUser] = useState(null);

    const [ notes, dispatch ] = useReducer(noteReducer, [], () => {
        const localData = localStorage.getItem('notes');
        return localData ? JSON.parse(localData) : []
    });

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes]);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(currentUser => user);
            console.log(user);
        });
    })
    

    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(searchNote.toLowerCase()))

    const addNote = (title, content) => {
        dispatch([...notes, { id: Math.random(), title, content} ]);
    }
    const displayEdit = id => {
        const filteredNotess = notes.filter(note => note.id !== id);
        const selectedNote = notes.find(note => note.id === id); 

        dispatch({type: 'DISPLAY_NOTE', note: {
            title, content
        }})

        setTitle(selectedNote.title);
        setContent(selectedNote.content);
        setEditItem(true);
    }
    const HandleEdit = e => {
        e.preventDefault();

        dispatch({type: 'ADD_NOTE', note: {
            title, content
        }})

        alert('note successfully edited');
        
        setTitle('');
        setContent('');
        setEditItem(false);
    }
    return (
        <NoteContext.Provider value={{ notes, displayEdit, HandleEdit,  dispatch, filteredNotes, setSearchNote, title, content, editItem, setEditItem, setTitle, setContent, currentUser }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteContextProvider;