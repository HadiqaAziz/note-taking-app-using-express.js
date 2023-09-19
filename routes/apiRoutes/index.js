const router = require('express').Router();
const {createNewNote} = require("../../lib/notes");
const { v4: uuid } = require('uuid');
const {notes} = require("../../db/db.json");

// show all notes in  db.json file
router.get("/notes", (req, res) => {
    let result = notes;
    res.json(result);
  }); 
// update a new note in db.json file
  router.post("/notes", (req, res) => {
    req.body.id = uuid();
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
  });  

  module.exports = router;
