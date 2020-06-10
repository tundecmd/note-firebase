import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faFolder, faFolderPlus, faUserPlus, faSignInAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { NoteContext } from './contexts/noteContext';
import RandomDisplay from './randomDisplay';
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { auth } from './firebase/firebase';

const Navbar = () => {
    const { notes, setSearchNote, currentUser } = useContext(NoteContext);
    return (
            <nav className="navbar navbar-light" style={{backgroundColor: '#e3f2fd', marginTop: '10px'}}>
                <Link to='/create'>
                    <div className="display-4">
                        <FontAwesomeIcon icon={faFolderPlus} style={{fontSize: '45px'}} />
                    </div>
                </Link>
            <div><Link to='/' style={{textDecoration: 'none'}}>
                <h1 className="display-3 text-center">
                    <FontAwesomeIcon icon={faPencilAlt}  /> You write a lot!
                </h1></Link>
                <h1 className="lead text-center"><RandomDisplay /></h1>
                <p className="lead text-center">Currently, you have <strong>{notes.length}</strong> notes</p>
            </div>
            <Form>
                <Form.Group controlId="formGroupSearch">
                    <Form.Control 
                        type="search" 
                        placeholder="Search Notes..."
                        onChange={e => {setSearchNote(e.target.value)}} 
                    />
                </Form.Group>
                {
                    currentUser 
                    ?   
                        (
                            <div onClick={() => auth.signOut()}>
                                <p className="display-4 text-right">SIGN OUT</p>
                            </div>
                        )
                    :
                        (
                            <Link to ='/signin' onClick={() => console.log(currentUser)} style={{fontSize: '30px', textDecoration: 'none'}}>
                                <p style={{fontSize: '30px', textDecoration: 'none'}} className="display-4 text-right text-decoration-none">SIGN IN</p>
                            </Link>
                        )
                }
            </Form>
        </nav>
    );
}
 
export default Navbar;


            