import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
    
    function handleClick() {
        props.onDelete(props.id);
      }

    return (
        <div className="note flex-item">
            <h6 className="eeu-h6">{props.title}</h6>
            <p>{props.content}</p>
            <button onClick={handleClick}>
                <DeleteIcon />
            </button>
        </div>
    );
}

export default Note;