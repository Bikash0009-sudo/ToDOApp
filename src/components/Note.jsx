import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
function Note (props) {

    function handleDelet(event){
               props.onDelet(props.id);
    }

return(
    <div className='note'>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <button onClick={handleDelet} ><RemoveIcon/></button>
    </div>
)
}

export default Note;