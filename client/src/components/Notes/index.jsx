import { useState, useEffect } from 'react'
import NotesForm from './NotesForm'

function Notes() {

  // STATE //

  const [notes, setNotes] = useState([])

  // EVENTS //

  function createNote(content) {
    // things might go here later...
  }

  // RENDER //

  return (

    <div>

      { notes.map(note => <h3>{note.id} {note.content}</h3>) }

      <NotesForm createNote={createNote} />

    </div>

  )

}

export default Notes
