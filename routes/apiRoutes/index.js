const router = require('express').Router();
const {createNewNote} = require("../../lib/notes");
const { v4: uuidv4 } = require('uuid');
const {notes} = require("../../db/db.json");

// show all notes in  db.json file
router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
  }); 
// update a new note in db.json file
  router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
  });  

  module.exports = router;