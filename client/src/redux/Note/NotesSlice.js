import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotesAsync = createAsyncThunk("notes/getNotes", async () => {
  const res = await axios.get("http://localhost:7000/notes");
  return res.data;
});

export const addNoteAsync = createAsyncThunk("notes/addNote", async (note) => {
  const res = await axios.post("http://localhost:7000/notes", note);
  return res.data;
});

export const deleteNoteAsync = createAsyncThunk(
  "notes/deleteNote",
  async (id) => {
    const res = await axios.delete(`http://localhost:7000/notes/${id}`);
    return res.data;
  }
);

export const searchNoteAsync = createAsyncThunk(
  "notes/searchNote",
  async (title) => {
    const res = await axios.get(`http://localhost:7000/notes/${title}`);
    return res.data;
  }
);

export const NotesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    getNotes: { isLoading: false },
    addNote: { isLoading: false },
  },
  reducers: {},
  extraReducers: {
    //Get notes
    [getNotesAsync.pending]: (state, action) => {
      state.getNotes.loading = true;
    },
    [getNotesAsync.fulfilled]: (state, action) => {
      state.getNotes.loading = false;
      state.notes = action.payload;
    },
    //Add note
    [addNoteAsync.pending]: (state, action) => {
      state.addNote.isLoading = true;
    },
    [addNoteAsync.fulfilled]: (state, action) => {
      state.addNote.isLoading = false;
      state.notes.push(action.payload);
    },
    //Delete note
    [deleteNoteAsync.fulfilled]: (state, action) => {
      state.notes = action.payload;
    },
    //Search note
    [searchNoteAsync.fulfilled]: (state, action) => {
      if (action.payload.length != 0 && action.payload) {
        state.notes = action.payload;
      } else {
        state.notes = [];
      }
    },
    [searchNoteAsync.rejected]: (state, action) => {
      console.log(action.error.message);
    },
  },
});

export const {} = NotesSlice.actions;

export default NotesSlice.reducer;
