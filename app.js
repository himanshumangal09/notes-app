const chalk = require('chalk')
const notes = require('./notes')
// console.log(chalk.red.inverse('Success'))
const yargs=require('yargs')
//commands 
yargs.command({
    command:'add',
    describe:'add a note',
    builder: {
        title:{
            describe:' note title ',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'description',
            demandOption:true,
            type:'string'
        }
    },
    handler (argv) {
    //     console.log('title:',argv.title)
    //     console.log('body:',argv.body)
        notes.addNote(argv.title,argv.body)
}
})
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder: {
        title:{
            describe:' note title ',
            demandOption:true,
            type:'string'
        }
        },    
    handler (argv) {
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command:'list',
    describe:'lists of note',
    handler () {
        notes.listNotes()
    }
})
yargs.command({
    command:'read',
    describe:'read a node',
    builder: {
        title:{
            describe:' note title ',
            demandOption:true,
            type:'string'
        }
        },
    handler (argv) {
        notes.readNote(argv.title)
    }
})
//console.log(yargs.argv)
 //===
   yargs.parse()
// const validator = require('validator')
// console.log(validator.isEmail('sdcs'))
// // const getNotes = require('./notes')
// // const note =getNotes()
// // console.log(note);
// // // const name=require('./utils')
// // // console.log(name);