import React, { useState } from "react";
import AddNoteFooter from "./AddNoteFooter";
import { useDispatch } from "react-redux";
import { addNoteAsync } from "../redux/Note/NotesSlice";

const AddNoteCard = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const [bgColor, setBgColor] = useState("red");
  const handleAddNote = (e) => {
    e.preventDefault();
    if (title !== "") {
      dispatch(addNoteAsync({ title, bgColor }));
    }
    e.target.children[0].value = "";
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form
      onSubmit={handleAddNote}
      className="my-6 bg-white border-2 border-zinc-400 rounded"
    >
      <textarea
        className="resize-none m-8 focus:outline-none font-semibold"
        name=""
        id=""
        cols="90"
        rows="5"
        placeholder="Enter your note here..."
        onChange={handleChange}
      ></textarea>
      <AddNoteFooter setBgColor={setBgColor} />
    </form>
  );
};

export default AddNoteCard;
