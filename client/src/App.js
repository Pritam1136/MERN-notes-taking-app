/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // State
  const [notes, setNotes] = useState(null);
  const [createForm, setCreateForm] = useState({
    title: "",
    body: "",
  });
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    body: "",
  });

  useEffect(() => {
    fetchnotes();
  }, []);

  // functions
  const fetchnotes = async () => {
    // fetch the notes
    const res = await axios.get("http://localhost:3001/notes");
    // set to the state
    setNotes(res.data.note);
  };

  const updateCreateFormFeild = (e) => {
    const { name, value } = e.target;
    setCreateForm({
      ...createForm,
      [name]: value,
    });
  };

  const createNote = async (e) => {
    e.preventDefault();
    // create note
    const res = await axios.post("http://localhost:3001/notes", createForm);

    // update state
    setNotes([...notes, res.data.note]);

    // clear form state
    setCreateForm({ title: "", body: "" });
  };

  const deleteNote = async (_id) => {
    //  Delete note
    await axios.delete(`http://localhost:3001/notes/${_id}`);

    // Update state
    const newNotes = [...notes].filter((note) => {
      return note._id !== _id;
    });

    setNotes(newNotes);
  };

  const handleUpdateFormFeild = (e) => {
    const { value, name } = e.target;

    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  const toggleUpdate = (note) => {
    // Set state on update form
    setUpdateForm({
      title: note.title,
      body: note.body,
      _id: note._id,
    });
  };

  const updateNote = async (e) => {
    e.preventDefault();
    // Send update request
    const { title, body } = updateForm;
    const res = await axios.put(
      `http://localhost:3001/notes/${updateForm._id}`,
      { title, body }
    );

    // Uppdate state
    const newNotes = [...notes];
    const noteIndex = notes.findIndex((note) => {
      return note._id === updateForm._id;
    });

    newNotes[noteIndex] = res.data.note;

    setNotes(newNotes);

    // clear form
    setUpdateForm({
      _id: null,
      title: "",
      body: "",
    });
  };

  return (
    <div className="app">
      <div>
        <h2>Notes:</h2>
        {notes &&
          notes.map((note) => {
            return (
              <div key={note._id}>
                <h2>{note.title}</h2>
                <p>{note.body}</p>
                <button onClick={() => deleteNote(note._id)}>
                  Delete note
                </button>
                <button onClick={() => toggleUpdate(note)}>Update note</button>
              </div>
            );
          })}
      </div>
      {updateForm._id && (
        <div>
          <h2>Update note:</h2>
          <form onSubmit={updateNote}>
            <input
              onChange={handleUpdateFormFeild}
              name="title"
              value={updateForm.title}
            />
            <textarea
              onChange={handleUpdateFormFeild}
              name="body"
              value={updateForm.body}
            />
            <button type="submit">Update note</button>
          </form>
        </div>
      )}

      {!updateForm._id && (
        <div>
          <h2>Create note:</h2>
          <form onSubmit={createNote}>
            <input
              onChange={updateCreateFormFeild}
              value={createForm.title}
              name="title"
            />
            <textarea
              onChange={updateCreateFormFeild}
              value={createForm.body}
              name="body"
            />
            <button type="submit">Create form</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
