import React, { useState } from 'react';
import Navbar from './Navbar';
import NoteList from './NoteList';
import NoteContextProvider from './contexts/noteContext';
import { Route, Switch } from 'react-router-dom';
import NewNoteForm from './new-note-form';
import NoteDetail from './NoteDetail';


const HomePage = () => {
     
    return (
        <div className='container'>
            <NoteContextProvider>
                <Navbar />
                <Switch>
                    <Route exact path='/' component = { NoteList } />
                    <Route path='/create' component = { NewNoteForm } />
                    <Route path='/:id' component = { NoteDetail } />
                </Switch>
            </NoteContextProvider>
        </div>
    );
}
 
export default HomePage;