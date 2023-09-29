import React, { useEffect } from "react";
//Components
import SearchInput from "./components/SearchInput.jsx";
import AddNoteCard from "./components/AddNoteCard.jsx";
import Notes from "./components/Notes.jsx";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { getNotesAsync } from "./redux/Note/NotesSlice.js";
import Loading from "./components/Loading.jsx";

function App() {
  const dispatch = useDispatch();
  const getNotesLoading = useSelector(
    (state) => state.notes.getNotes.isLoading
  );
  const addNoteLoading = useSelector((state) => state.notes.addNote.isLoading);
  const notes = useSelector((state) => state.notes.notes);

  useEffect(() => {
    dispatch(getNotesAsync());
  }, [dispatch]);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-gray-600 font-bold my-6">NotesApp</h1>
      <SearchInput />
      {addNoteLoading && <Loading title={"Adding Note.."} />}
      <AddNoteCard />
      {getNotesLoading ? (
        <Loading title={"Loading..."} />
      ) : notes.length != 0 ? (
        <Notes />
      ) : (
        <h1 className="text-2xl text-gray-600 font-bold my-6">
          No Notes Found
        </h1>
      )}
    </div>
  );
}

export default App;
