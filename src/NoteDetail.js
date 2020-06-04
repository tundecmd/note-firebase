import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { NoteContext } from './contexts/noteContext';

const NoteDetail = (props) => {
    const { filteredNotes, notes } = useContext(NoteContext);
    const [ id, setId ] = useState(props.match.params.id);
    
    useEffect(() => {    

        setId(props.match.params.id)

    }, [props.match.params.id])

    const notesArray = notes.filter(note => {
        console.log(note.id, props.match.params.id)
        return note.id === props.match.params.id
    })
    return(
        <div className='d-flex w-100 justify-content-between'>
            <Link to={'/' + id} style={{textDecoration: 'none'}}>
                <h5 className="mb-1" >id_title</h5>
            </Link>
            <p>id_content</p>
            
        </div>
    )
}

export default NoteDetail;