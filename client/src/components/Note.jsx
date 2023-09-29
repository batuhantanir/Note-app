import React from "react";
import { useDispatch } from "react-redux";
import { deleteNoteAsync } from "../redux/Note/NotesSlice";

const Note = ({ note }) => {
  const dispatch = useDispatch();

  const handleDeleteNote = async (id) => {
   await dispatch(deleteNoteAsync(id));
  };
  return (
    <li
      className="flex border h-16 w-72 m-4 px-4 justify-between items-center text-white rounded"
      style={{ backgroundColor: `${note.bgColor}` }}
    >
      {note.title}
      <button
        onClick={() => {
          handleDeleteNote(note.id);
        }}
        className="flex border px-2 items-center justify-center bg-white text-black hover:scale-110 active:scale-90 "
      >
        X
      </button>
    </li>
  );
};

export default Note;
