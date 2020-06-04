import React, { useContext } from 'react';
import { NoteContext } from './contexts/noteContext';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faFolder, faFolderPlus, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const Note = ({note, match, history }) => {
    const { dispatch, displayEdit, HandleEdit } = useContext(NoteContext);
    return (
        <div className='container' style={{width: '100%', marginTop: '40px', backgroundColor: '#e3f2fd'}}>           <ul className='row primary card card-body'>
                <li className='list-group-item list-group-item-action flex-column align-items-start'>
                    <div className='d-flex w-100 d-flex justify-content-between'>                   
                        <h5 className="mb-1" >{note.title}</h5>
                        <div>
                            <Link to='/create'>
                                <button onClick={() => displayEdit(note.id)}>
                                    <FontAwesomeIcon icon={faEdit} className='text-success' />
                                </button>
                            </Link>
                            <button onClick={() => dispatch({type: 'REMOVE_NOTE', id: note.id})}>
                                <FontAwesomeIcon icon={faTrashAlt} className='text-danger' />
                            </button>
                        </div>
                    </div>
                    <p className="mb-1">{note.content}</p>  
                </li>
            </ul>
        </div>
    );
}
 
export default withRouter(Note);