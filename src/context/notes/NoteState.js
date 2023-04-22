import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZjE5NTBiYjE3MGJmMGJiYmVjZmIxIn0sImlhdCI6MTY4MDg0OTM0MH0.QVrl-IQbNNjbbHfit81fsit_ayFqUkczVckhecgVUE8",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };
  // Add a Note
  const addNote = async (title, description, tag) => {
    console.log("Adding a new note");
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZjE5NTBiYjE3MGJmMGJiYmVjZmIxIn0sImlhdCI6MTY4MDg0OTM0MH0.QVrl-IQbNNjbbHfit81fsit_ayFqUkczVckhecgVUE8",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // const json = response.json();

    const note = {
      _id: "64421a305b1dcea1132ey186a97",
      user: "642f1950bb170bf0bbb2ecfb1",
      title: title,
      description: description,
      tag: tag,
      date: "2023-04-21T05:08:00.361Z",
      __v: 0,
    };

    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZjE5NTBiYjE3MGJmMGJiYmVjZmIxIn0sImlhdCI6MTY4MDg0OTM0MH0.QVrl-IQbNNjbbHfit81fsit_ayFqUkczVckhecgVUE8",
      },
    });
    const json = await response.json();
    console.log(json);

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });

    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZjE5NTBiYjE3MGJmMGJiYmVjZmIxIn0sImlhdCI6MTY4MDg0OTM0MH0.QVrl-IQbNNjbbHfit81fsit_ayFqUkczVckhecgVUE8",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // const json = response.json();

    // logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
