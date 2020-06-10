import React, { useState, useContext } from 'react';
import { NoteContext } from './contexts/noteContext';

const NewNoteForm = () => {
    const { dispatch, HandleEdit, editNote, title, content, editItem, setTitle, setContent, setEditItem } = useContext(NoteContext);

    const HandleTitle = e => {
        setTitle(e.target.value);
    }
    const HandleContent = e => {
        setContent(e.target.value);
    }
    const HandleAdd = e => {
        e.preventDefault();

        dispatch({type: 'ADD_NOTE', note: {
            title, content
        }})
        alert('note successfully added');
        
        setTitle('');
        setContent('');
        setEditItem(false);
  
    }
        
    return (<form onSubmit={!editItem ? HandleAdd : HandleEdit} style={{marginTop: '100px'}}>
            <div className="form-group">
                <input 
                    type="text" 
                    placeholder='Title'
                    value={title}
                    onChange={HandleTitle}
                    className="form-control form-control-lg"
                    required
                />
            </div>
            <div className="form-group">
                <div className="md-form">
                    <textarea 
                        type='text'
                        placeholder='Content' 
                        value={content}
                        className="md-textarea form-control" 
                        onChange={HandleContent} 
                        required
                        style={{height: '200px'}}
                    />
                </div>
            </div>
            <button 
                type='submit'
                className="btn btn-lg btn-block mb-5 text-capitalize"
                style={{backgroundColor: !editItem ? '#e3f2fd' : '#454545', opacity: 1.5}}
            >
                {!editItem ? ' add note' : 'edit note'}
            </button>
        </form>
    )

}
 
export default NewNoteForm;