const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const { json } = require("body-parser");
const { nanoid } = require("nanoid");

dotenv.config({ path: "./config.env" });

const app = express();

app.use(cors());
app.use(json());

let notes = [
  {
    id: nanoid(),
    title: "Note 1",
    bgColor: "#ff0000",
  },
  {
    id: nanoid(),
    title: "Note 2",
    bgColor: "#00ff00",
  },
  {
    id: nanoid(),
    title: "Note 3",
    bgColor: "#0000ff",
  },
  {
    id: nanoid(),
    title: "Note 4",
    bgColor: "#ffff00",
  },
  {
    id: nanoid(),
    title: "Note 5",
    bgColor: "#ff00ff",
  },
];

app.get("/notes", (req, res) => res.send(notes));

app.post("/notes", (req, res) => {
  const note = {
    title: req.body.title,
    id: nanoid(),
    bgColor: req.body.bgColor,
  };
  notes.push(note);
  return res.send(note);
});

app.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  const index = notes.findIndex((note) => note.id == id);
  if (index > -1) {
    notes.splice(index, 1);
  }

  res.send(notes);
});

app.get('/notes/:title', (req,res)=>{
  const title = req.params.title;
  const filtered = notes.filter((note) => note.title.toLowerCase().includes(title.toLowerCase()));
  return res.send(filtered);
})

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));
