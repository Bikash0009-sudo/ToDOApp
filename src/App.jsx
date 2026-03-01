import React , {useState} from 'react'
import Note from './components/Note'
import NoteArea from './components/NoteArea'


function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote){
         setNotes((prevNotes) => {
            return [...prevNotes,newNote];
         })
    }

    function deletNote(id){
        setNotes((prevNotes) => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

  return (
 <div className = "app">
     <NoteArea onSubmit={addNote}/>
     <div className = "container">
    { notes.map((noteItem, index) => {
        return(
            <Note key={index} id= {index} title = {noteItem.title} content = {noteItem.content} onDelet={deletNote}/>  
        )
     })}
     </div>
     
 </div>
   

   

    )
 
}

export default App
