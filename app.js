const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe : 'Title of the Note',
    demand : true,
    alias : 't'
};
const bodyOptions = {
    describe : 'Body of the NOte',
    demand : true,
    alias : 'b'
};

const argv = yargs
    .command('add', 'Adds a new note', {
       title : titleOptions,
       body : bodyOptions
    })
    .command('read', 'Read a single Note with the given Title', {
        title : titleOptions
    })
    .command('remove', 'Remove the Note with the specified title', {
        title : titleOptions
    })
    .command('list', 'Lists all the notes.')
    .help()
    .argv;

let command = argv._[0];


if (command === 'add') {
    let note = notes.addNote(argv.title,argv.body);
    if (note){
        console.log('Note Created');
        notes.logNote(note);
    }
    else{
        console.log(`Note with title ${argv.title} alredy exist. Try another title.`)
    }
}
else if (command === 'list'){
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => notes.logNote(note));
}
else if (command === 'read'){
    let note = notes.getNote(argv.title);
    if (note){
        console.log('Note Found');
        notes.logNote(note);
    }
    else{
        console.log('Note not Found');
    }
}
else if (command === 'remove'){
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed' : 'Note not Found';
    console.log(message);
}
else{
    console.log('Command is not recognized');
}