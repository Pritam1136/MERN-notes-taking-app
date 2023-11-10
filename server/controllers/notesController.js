const Note = require("../modals/note");

const fetchNotes = async (req, res) => {
  //   find the notes
  const note = await Note.find();

  // respond with it
  res.json({ note: note });
};

const fetchNote = async (req, res) => {
  // get id of the url
  const noteId = req.params.id;

  // find the note using the id
  const note = await Note.findById(noteId);

  // respond with the note
  res.json({ note: note });
};

const createNotes = async (req, res) => {
  // Get the sent in data off request body

  const { title, body } = req.body;

  //  create a note with it
  const note = await Note.create({ title: title, body: body });

  //   respond with the new note
  res.json({ note: note });
};

const updateNotes = async (req, res) => {
  // get the id off the url
  const noteId = req.params.id;

  //    get the data off the req body

  const { title, body } = req.body;

  // find and update the record
  await Note.findByIdAndUpdate(noteId, {
    title: title,
    body: body,
  });

  //   find updated note
  const note = await Note.findById(noteId);

  // respond
  res.json({ note: note });
};

const deleteNotes = async (req, res) => {
  // get id off the url
  const noteId = req.params.id;

  // Delete the record
  await Note.deleteOne({ _id: noteId });

  // respond
  res.json({ success: "note deleted successfully" });
};

module.exports = {
  fetchNotes,
  fetchNote,
  createNotes,
  updateNotes,
  deleteNotes,
};
