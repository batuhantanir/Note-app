import React from "react";
import { useDispatch } from "react-redux";
import { searchNoteAsync } from "../redux/Note/NotesSlice";

const SearchInput = () => {
  const dispatch = useDispatch();

  const handleSearch = async(e) => {
   await dispatch(searchNoteAsync(e.target.value));
  };
  return (
    <input
      onChange={handleSearch}
      type="text"
      placeholder="Search.."
      className="px-3 py-1 rounded-full font-semibold border-2 border-zinc-400"
    />
  );
};

export default SearchInput;
