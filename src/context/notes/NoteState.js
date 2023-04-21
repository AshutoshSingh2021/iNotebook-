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
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
