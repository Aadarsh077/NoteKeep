import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext'

const AddNote = () => {
  const context = useContext(noteContext);
  const {addNote} = context;

  const [note, setNote] = useState({title: "", description: "", tag: "default"})

  const onChange = (e)=>{
    setNote({...note, [e.target.name]: e.target.value})
  }

  const handleClick = (e) =>{
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  }
  return (
    <div>
      <div className="container my-3">
                <h2>Add a Note</h2>
                <form className="my-3">
                    <div className="mb-3">
                        <label htmlFor="Title" className="form-label">Title</label>
                        <input onChange={onChange} type="text" className="form-control" id="title" aria-describedby="emailHelp" name='title' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input onChange={onChange} type="text" className="form-control" id="description" name='description' />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>
            </div>
    </div>
  )
}

export default AddNote
