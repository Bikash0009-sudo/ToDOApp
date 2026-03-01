import React, { useState } from 'react'

function NoteArea(props) {

    const[note,setNote] = useState({
        title: "",
        content: ""
    });

    const[clicked, setClicked] = useState(false);

    function handleChange(event) {
       const{name, value} = event.target;
        setNote((prevNote)=> {
            return {
                ...prevNote,
                [name] : value,
            };
        });
    }

    function submitNote(event) {
        props.onSubmit(note);
        setNote({
        title: "",
        content: ""
    });
        event.preventDefault();
    }

    function handleContent(event) {
          setClicked(true);
    }

return(
    <div className='note-area'>
      {
        clicked ? <input className = 'inoutbox' onChange={handleChange} value={note.title} name="title" type="text" placeholder='Title '/> : null
      }
      <textarea onClick={handleContent} className='text-box' onChange={handleChange} value={note.content} name="content" placeholder='Note...' rows="1"></textarea>
      <button onClick={submitNote}>Add</button>
      </div>
)
}

export default NoteArea;