import React, { useState } from 'react';
import Navbar from './Navbar';
import NoteList from './NoteList';
import NoteContextProvider from './contexts/noteContext';
import { Route, Switch } from 'react-router-dom';
import NewNoteForm from './new-note-form';
import SignIn from './sign-in/sign-in';


const HomePage = () => {
    return (
        <div className='container'>
            <NoteContextProvider>
                <Navbar />
                <Switch>
                    <Route exact path='/' component = { NoteList } />
                    <Route path='/create' component = { NewNoteForm } />
                    <Route path='/signin' component = { SignIn } />
                </Switch>
            </NoteContextProvider>
        </div>
    );
}
 
export default HomePage;