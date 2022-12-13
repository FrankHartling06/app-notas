const database = require('./database');
const notesDB = require ('./notes.json');

const loadSeed = async()=>{
    database.insertMany(notesDB);
    console.log("Load Seed complete!");
    console.log("Refresh the page please");
}

loadSeed();