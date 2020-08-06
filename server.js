const express = require("express");
const path = require("path");
const fs = require("fs");

// Set up express app
const app = express();
// Set up port
const PORT = process.env.PORT || 3000;

// Data parsing
app.use(express.urlencoded({ extended:true}));
app.use(express.json());

// Routes
// to serve images, CSS files, and JavaScript files in a directory named public
app.use(express.static("public"));
// When access to the app, send url of 'index.html' 
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});
// When click start button, send url of 'notes.html' 
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "/notes.html"));
});
// Display all notes
app.get("/api/notes", function(req, res){
    fs.readFile("db/db.json", "utf8", function(err, notes){
        if(err){
            return err
        }
        res.json(JSON.parse(notes));
    });
});
// Posting note to db.json
app.post("/api/notes", function(req, res){
    const newNote = req.body
    let notesDB = [];
    fs.readFile(path.join(__dirname + "/db/db.json"), "utf8", function(err, data){
        if(err){
            return console.log(err);
        }
        // If starting from an empty json file
        if(data === "") {
            notesDB.push({ "id": 1, "title": newNote.title, "text": newNote.text });
        }else {
            console.log(data);
            notesDB = JSON.parse(data);
            notesDB.push({ "id":notesDB.length + 1, "title":newNote.title, "text": newNote.text });
        }
        // Updated notes pushed to db.json
        fs.writeFile((path.join(__dirname + "/db/db.json")),JSON.stringify(notesDB), function(err){
            if(err) {
                return console.log(err);
            }
            res.json(notesDB);
        });
    });
});

//Deleting Note - pull JSON file, stringify, specify individual note id, remove, rewrite JSON file
app.delete("/api/notes/:id", function (req, res) {
    const newNote = req.body
    const noteID = req.params.id
    let notesDB = []
    fs.readFile(path.join(__dirname + "/db/db.json"), "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data)
        notesDB = JSON.parse(data);
        //the selected note ID is filtered out of the new notesDB array, which will be written as the new notes array
        notesDB = notesDB.filter(function(object){
            return object.id != noteID
        })

        // updated notes pushed to db.json
        fs.writeFile((path.join(__dirname + "/db/db.json")), JSON.stringify(notesDB), function (error) {
            if (error) { return console.log(error); }
            res.json(notesDB);
        });
    });
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

