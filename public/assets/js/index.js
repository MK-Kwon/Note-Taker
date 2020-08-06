const $noteTitle = $(".note-title");
const $noteText =$(".note-textarea");
const $saveNoteBtn =$(".save-note");
const $newNoteBtn =$(".new-note");
const $noteList =$(".list-container .list-group");

// activeNote is used to keep track of the note in the textarea
const activeNote = {};

// Function for getting all notes from the db
const getNotes = function() {
    return $.ajax({
        url: "/api/notes",
        method: "GET"
    });
};

// Function for saving a note to the db
const saveNote = function(note) {
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


// Function to display activeNote and if there's no activeNote, render empty inputs. Also 'save button' should be hidden to prevent duplication in saving same notes.
const renderActiveNotes = function() {
    $saveNoteBtn.hide();

    if(activeNote.id) {
        // jQuery 1.9+ (https://stackoverflow.com/questions/1306708/how-to-add-a-readonly-attribute-to-an-input)
        $noteTitle.prop("readonly", true);
        $noteText.prop("readonly", true);
        // .val() is used to get/replace input elements values in jQuery,
        $noteTitle.val(activeNote.title);
        $noteText.val(activeNote.text);
    }else {
        $noteTitle.prop("readonly", false);
        $noteText.prop("readonly", false);
        $noteTitle.val("");
        $noteText.val("");
    }
};


// Function to get the note data from the inputs, save it to the db and update the view
const handleNoteSave = function() {
    const newNotes = {
        title: $noteTitle.val(),
        text: $noteText.val()
    };
    saveNote(newNotes).then(function(){
        getAndRenderNotes();
        renderActiveNotes();
    });
};

// Function to delete the saved notes when clicked
const handleNoteDelete = function(event) {
    // This will stop the other button function('handleNoteView') to be called
    event.stopPropagation();
    // Getting the data from the delete button's parent element
    const note = $(this).parent(".list-group-item").data();
    // If the id of the saved note and the id of active note are equal, remove the active note from textarea
    if(activeNote.id === note.id) {
        activeNote = {};
    }
    deleteNote(note.id).then(function() {
        getAndRenderNotes();
        renderActiveNotes();
    })

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
