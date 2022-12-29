const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const fetchUser = require("../middleware/fetchUser");
const Notes = require('../models/Notes');

//Route 1:-get all notes by using :Get "api/notes/fetchallnotes" . Login required
router.get('/fetchallnotes', fetchUser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});



//Route 2:-save all notes by using :POST "api/notes/savenotes" . Login required
router.post('/savenotes', fetchUser, [
    body('tittle', 'tittle must be atleast 3 letters').isLength({ min: 3 }),
    body('description', 'Description length must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    // if validation fails then gives message with array of errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { tittle, description, tag } = req.body;
        const note = new Notes({
            tittle, description, tag, user: req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});



//Route 3:-update notes by using :PUT "api/notes/updatenotes" . Login required
router.put('/updatenotes/:id', fetchUser, async (req, res) => {
   try{
    const { tittle, description, tag } = req.body;
    //create new note object 
    const newNote = {};
    if (tittle) { newNote.tittle = tittle }
    if (description) { newNote.description = description }
    if (tag) { newNote.tag = tag }

    //find the note to be updated and update it
    let note = await Notes.findById(req.params.id);
    if (!note) {
        return res.status(404).send("not found")
    }

    //check whether the id of user comes with note is similar to id of user in users then allow
    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("not allowed");
    }

    //update the date of note and save
    note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
    res.json({ note });
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})



//Route 4:-delete notes by using :DELETE "api/notes/deletenotes" . Login required
router.delete('/deletenotes/:id', fetchUser, async (req, res) => {
   
try{
    //find the note to be delete and delete it
    let note = await Notes.findById(req.params.id);
    if (!note) {
        return res.status(404).send("not found")
    }

    //check whether the id of user comes with note is similar to id of user in users then allow
    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("not allowed");
    }

    //delete the data of note
    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({"Success":"note has deleted" , note: note });
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})

module.exports = router