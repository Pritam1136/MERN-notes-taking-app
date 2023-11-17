const { default: mongoose } = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  body: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Note = mongoose.model("Notes", noteSchema);

module.exports = Note;
