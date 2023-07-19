import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const host = "http://localhost:5000"
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)

    // Get all notes
    const getNotes = async () => {
      // API Call
      const response = await fetch(`${host}/api/notes/fetchnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhNmJjYWZmMWU5ZWZlNzkxN2U4ZjllIn0sImlhdCI6MTY4ODY1MzYzMn0._1mxOOvPkME_sNrI9CkvHSN-yUIJ417Lt_7XDCAqd7s'
        }
      });
      const json = await response.json()
      console.log(json)
      setNotes(json)
    }

    //Add a Note
    const addNote = async (title, description, tag)=>{
      // API call
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhNmJjYWZmMWU5ZWZlNzkxN2U4ZjllIn0sImlhdCI6MTY4ODY1MzYzMn0._1mxOOvPkME_sNrI9CkvHSN-yUIJ417Lt_7XDCAqd7s'
        },
        body: JSON.stringify({title, description, tag})
      });
      
      const note = await response.json();
      setNotes(notes.concat(note))
    }

    const deleteNote = async (id)=>{
      // API Call
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhNmJjYWZmMWU5ZWZlNzkxN2U4ZjllIn0sImlhdCI6MTY4ODY1MzYzMn0._1mxOOvPkME_sNrI9CkvHSN-yUIJ417Lt_7XDCAqd7s'
        }
      })
      const json = response.json();
      console.log(json)

      console.log("Deleting the note with id" + id);
      const newNotes = notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes);
    }
    
    // Edit a Note
    const editNote = async (id, title, description, tag) => {
      // API Call
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhNmJjYWZmMWU5ZWZlNzkxN2U4ZjllIn0sImlhdCI6MTY4ODY1MzYzMn0._1mxOOvPkME_sNrI9CkvHSN-yUIJ417Lt_7XDCAqd7s'
        },
        body: JSON.stringify({title, description, tag})
      })
      const json = await response.json();
      console.log(json);

      let newNotes = JSON.parse(JSON.stringify(notes))
      // Login to edit in client
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id){
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
      }
      setNotes(newNotes);
    }


    return (
        <NoteContext.Provider value={{notes, setNotes, addNote, deleteNote, getNotes, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;