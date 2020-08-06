const $noteTitle = $(".note-title");
const $noteText =$(".note-textarea");
const $saveNoteBtn =$(".save-note");
const $newNoteBtn =$(".new-note");
const $noteList =$(".list-container .list-group");

// activeNote is used to keep track of the note in the testarea
const activeNote = {};

// Function for getting all notes from the db
const getNotes = function() {
    return $.ajax({
        url: "/api/notes",
        method: "GET"
    });
};

// Function for saving a note to the db
const saveNote = function(data) {
    return $.ajax({
        url: "/api/notes",
        data: note,
        method: "POST"
    });
};

// Function for deleting a note from the db
const deleteNote = function(id) {
    return $.ajax({
        url: "/api/notes/" + id,
        method: "DELETE"
    })
};


// If there's an activeNote, display it. Otherwise render empty inputs
const renderActiveNotes = function() {

};


// Function to get the note data from the inputs, save it to the db and update the view
const handleNoteSave = function() {

};

// Function to delete the saved notes when clicked
const handleNoteDelete = function() {

};

// Function to display saved notes on to the testarea when clicked
const handleNoteView = function() {

};


// Function to remove unsaved new notes from textarea so that the user can write a new one
const handleNewNoteView = function() {

};


// Function to hide the save button if a note's title or text are empty. Or else show the button
const handleRenderSaveBtn = function() {

};

// Function to render the list of note titles in note-textarea
const renderNoteList = function() {

};

// Function to get notes from the db and render them in note-textarea(when initialise the application)
const getAndRenderNotes = function() {

};

// Gets and renders the list of saved notes when initialised
getAndRenderNotes();
