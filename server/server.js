const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const mongoose = require("mongoose");
const PORT = 1410;
const Schema = mongoose.Schema;

mongoose.connect(
    "mongodb+srv://NotTheRightGuy:delsion1410@aristotle.hxwqsbg.mongodb.net/brokenMind?retryWrites=true&w=majority"
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Successfully connected to MongoDB");
});

const notesSchema = new Schema({
    title: String,
    body: String,
});

const notes = mongoose.model("notes", notesSchema);

// const newNote = new notes({
//     title: "Is the it, is My app running?",
//     body: "There is no end to this misery, one may surrender as quickly as possible",
// });

// newNote.save(() => {
//     console.log("New note saved");
// });

app.get("/notes", (req, res) => {
    console.log("Trying to Fetch Notes");
    notes.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
