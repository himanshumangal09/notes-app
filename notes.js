const fs= require('fs')
const chalk = require('chalk')
//ADDING A NOTE
const addNote =  (title,body) => {
const notes=loadNotes()
const duplicateNotes=notes.find((note) =>note.title===title)
debugger
if(!duplicateNotes)
{
    notes.push({
    title:title,
    body:body
})
saveNotes(notes)
console.log(chalk.green.inverse('added'))
}
else {
    console.log(chalk.red.inverse('note title taken'))
}
}
const saveNotes =   (notes) => {
const dataJSON=JSON.stringify(notes)
fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
   try {
    const dataBuffer=fs.readFileSync('notes.json')
    const dataJSON=dataBuffer.toString()
    return JSON.parse(dataJSON)
   } 
   catch(e){
return []
   }
}
//removing 
const removeNote = (title)=>{
    const notes=loadNotes()
    const noteTokeep = notes.filter((note)=> note.title!==title)
if(notes.length>noteTokeep.length) {
    console.log(chalk.green.inverse('removed'))
}
else {
    console.log(chalk.red.inverse('Not Exist'))
}
saveNotes(noteTokeep)   
}
//listing notes
const listNotes = () =>{
    const notes=loadNotes()
    console.log(chalk.red('Your Notes'))
    notes.forEach((n)=> {
    console.log(n)
    })
}
const readNote = (title) => {
const notes=loadNotes()
const readed=notes.find((note)=>note.title===title)
if(readed!==undefined) {
console.log(chalk.green.inverse(readed.title))
console.log(readed.body)
}
else{
    console.log(chalk.red.inverse('Error'))
}
}


module.exports ={
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}