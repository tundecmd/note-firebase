import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faFolder, faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { NoteContext } from './contexts/noteContext';
import RandomDisplay from './randomDisplay';
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Navbar = () => {
    const { notes, setSearchNote } = useContext(NoteContext);
    return (
        <nav className="navbar navbar-light" style={{backgroundColor: '#e3f2fd', marginTop: '10px'}}>
            <Link to='/'>
                <p className="display-4 text-right"><FontAwesomeIcon icon={faFolder}  /></p>
            </Link>
            <div>
                <h1 className="display-3 text-center">
                    <FontAwesomeIcon icon={faPencilAlt} /> You write a lot!
                </h1>
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
            </Form>
            <Link to='/create'>
                <div className="display-4">
                    <FontAwesomeIcon icon={faFolderPlus} />
                </div>
            </Link>
        </nav>
    );
}
 
export default Navbar;