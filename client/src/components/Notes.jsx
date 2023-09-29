import React from "react";
import Note from "./Note.jsx";
import { useSelector } from "react-redux";

const Notes = () => {
  const notes = useSelector((state) => state.notes.notes);

  return (
    <ul className="flex flex-wrap justify-center mx-24">
      {notes.map((note, idx) => (
        <Note note={note} key={idx} />
      ))}
    </ul>
  );
};

export default Notes;
