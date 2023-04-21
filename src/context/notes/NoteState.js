import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "64421a165b1dcea11e186a95",
      user: "642f1950bb170bf0bbbecfb1",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-04-21T05:07:34.853Z",
      __v: 0,
    },
    {
      _id: "64421a305b1dcea11e186a97",
      user: "642f1950bb170bf0bbbecfb1",
      title: "My Title",
      description: "Please wake up early and stay healthy.",
      tag: "personal",
      date: "2023-04-21T05:08:00.361Z",
      __v: 0,
    },
    {
      _id: "64421a165b1dcea11ex186a95",
      user: "642f1950bb170bf0bbbecfb1",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-04-21T05:07:34.853Z",
      __v: 0,
    },
    {
      _id: "64421a305b1dcea11e1j86a97",
      user: "642f1950bb170bf0bbbecfb1",
      title: "My Title",
      description: "Please wake up early and stay healthy.",
      tag: "personal",
      date: "2023-04-21T05:08:00.361Z",
      __v: 0,
    },
    {
      _id: "64421a165b1dcea5511e186a95",
      user: "642f1950bb170bf0bbbecfb1",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-04-21T05:07:34.853Z",
      __v: 0,
    },
    {
      _id: "64421a305b1dcea11ey186a97",
      user: "642f1950bb170bf0bbbecfb1",
      title: "My Title",
      description: "Please wake up early and stay healthy.",
      tag: "personal",
      date: "2023-04-21T05:08:00.361Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tag) => {
    console.log("Adding a new note");
    // TODO: API Call
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
  const deleteNote = () => {};

  // Edit a Note
  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
