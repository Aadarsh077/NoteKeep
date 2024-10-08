import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext'

const AddNote = (props) => {
  const context = useContext(noteContext);
  const {addNote} = context;

  const [note, setNote] = useState({title: "", description: "", tag: ""})

  const onChange = (e)=>{
    setNote({...note, [e.target.name]: e.target.value})
  }

  const handleClick = (e) =>{
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag: ""})
    props.showAlert('Added Successfully', 'success')
  }
  
  return (
    <div>
      <div className="container my-3">
                <h2>Add a Note</h2>
                <form className="my-3">
                    <div className="mb-3">
                        <label htmlFor="Title" className="form-label">Title</label>
                        <input onChange={onChange} type="text" className="form-control" id="title" aria-describedby="emailHelp" name='title' value={note.title} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input onChange={onChange} type="text" className="form-control" id="description" name='description' value={note.description} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Tag" className="form-label">Tag</label>
                        <input onChange={onChange} type="text" className="form-control" id="tag" name='tag' value={note.tag} />
                    </div>

                    <button disabled={note.title.length<3 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>
            </div>
    </div>
  )
}

export default AddNote
