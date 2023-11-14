const express = require("express");
const connectToDb = require("./config/connectToDB");
const cors = require("cors");
const notesController = require("./controllers/notesController");
const usersController = require("./controllers/usersController");
const cookieParser = require("cookie-parser");
const requireAuth = require("./middleware/requireAuth");

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

connectToDb();

app.post("/signup", usersController.signUp);

app.post("/login", usersController.logIn);

app.get("/logout", usersController.logOut);

app.get("/check-auth", requireAuth, usersController.checkAuth);

app.get("/notes", notesController.fetchNotes);

app.get("/notes/:id", notesController.fetchNote);

app.post("/notes", notesController.createNotes);

app.put("/notes/:id", notesController.updateNotes);

app.delete("/notes/:id", notesController.deleteNotes);

app.listen(process.env.PORT, () => {
  console.log(`Server started in port ${process.env.PORT}`);
});
