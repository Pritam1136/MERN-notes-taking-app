const { default: mongoose } = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  body: String,
});

const Note = mongoose.model("Notes", noteSchema);

module.exports = Note;
