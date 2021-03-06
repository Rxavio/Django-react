import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem'

const NotesListPage = () => {
    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])


    let getNotes = async () => {

        let response = await fetch('/api/notes/')
        let data = await response.json()
        console.log(data)
        setNotes(data)
    }

    return (
        <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">8</p>
            </div>

            <div className="notes-list">
                {notes.map((note, index) => (
                    // <h3 key={index}> {note.body} </h3>
                    <ListItem key={index} note={note} />
                ))}
            </div>
           
        </div>
    )
}
export default NotesListPage