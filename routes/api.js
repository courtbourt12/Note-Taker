const router = require("express").Router();
const store = require("../db/store");

// Getting the note from user input by using the getNote function on the store.js page.

router.get('/notes', (req, res) => {
store
.getNotes()
.then((notes) => {
  return res.json(notes)
})
.catch((err) => res.status(500).json(err))
});

// Posting the req.body note using the addNote function from the store.js page.

router.post('/notes', (req, res) => {
    store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err))
});

// Deleting the saved note using the removeNote function from the store.js page.

router.delete('/notes', (req, res) => {
    store
    .removeNote(req.params.id)
    .then((note) => res.json())
    .catch((err) => res.status(500).json(err))
});

module.exports = router;
