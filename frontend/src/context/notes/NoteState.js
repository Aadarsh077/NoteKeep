import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const host = "http://localhost:5000"
    const notesInitial = [
        {
          "_id": "64a71333502463fdfb827ad2",
          "user": "64a6bcaff1e9efe7917e8f9e",
          "title": "Grocery Shoping",
          "description": "Buy by keeping the budget in mind",
          "tag": "Personal",
          "date": "2023-07-06T19:17:07.598Z",
          "__v": 0
        },
        {
          "_id": "64a71334502463fdfb827ad4",
          "user": "64a6bcaff1e9efe7917e8f9e",
          "title": "Grocery Shoping",
          "description": "Buy by keeping the budget in mind",
          "tag": "Personal",
          "date": "2023-07-06T19:17:08.126Z",
          "__v": 0
        },
        {
          "_id": "64a71334502463fdfb827ad6",
          "user": "64a6bcaff1e9efe7917e8f9e",
          "title": "Grocery Shoping",
          "description": "Buy by keeping the budget in mind",
          "tag": "Personal",
          "date": "2023-07-06T19:17:08.343Z",
          "__v": 0
        },
        {
          "_id": "64a71334502463fdfb827ad8",
          "user": "64a6bcaff1e9efe7917e8f9e",
          "title": "Grocery Shoping",
          "description": "Buy by keeping the budget in mind",
          "tag": "Personal",
          "date": "2023-07-06T19:17:08.983Z",
          "__v": 0
        },
        {
          "_id": "64a71335502463fdfb827ada",
          "user": "64a6bcaff1e9efe7917e8f9e",
          "title": "Grocery Shoping",
          "description": "Buy by keeping the budget in mind",
          "tag": "Personal",
          "date": "2023-07-06T19:17:09.163Z",
          "__v": 0
        },
        {
          "_id": "64a71335502463fdfb827adc",
          "user": "64a6bcaff1e9efe7917e8f9e",
          "title": "Grocery Shoping",
          "description": "Buy by keeping the budget in mind",
          "tag": "Personal",
          "date": "2023-07-06T19:17:09.381Z",
          "__v": 0
        }
      ]

    const [notes, setNotes] = useState(notesInitial)

    //Add a Note
    const addNote = (title, description, tag)=>{
      //TODO: API call
      console.log("Adding a new note")
      const note = {
        "_id": "64a71335502463fdfb827ada",
        "user": "64a6bcaff1e9efe7917e8f9e",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-07-06T19:17:09.163Z",
        "__v": 0
      }
      setNotes(notes.concat(note))
    }

    const deleteNote = (id)=>{
      //TODO: api call
      console.log("Deleting the note with id" + id);
      const newNotes = notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes);
    }
    
    // Edit a Note
    const editNote = async (id, title, description, tag) => {
      // API Call
      const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhNmJjYWZmMWU5ZWZlNzkxN2U4ZjllIn0sImlhdCI6MTY4ODY1MzYzMn0._1mxOOvPkME_sNrI9CkvHSN-yUIJ417Lt_7XDCAqd7s'
        },
        body: JSON.stringify({title, description, tag})
      })
      const json = response.json();

      // Login to edit in client
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if (element._id === id){
          element.title = title;
          element.description = description;
          element.tag = tag;
        }
      }
    }


    return (
        <NoteContext.Provider value={{notes, setNotes, addNote, deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;