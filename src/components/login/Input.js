import React from "react";

function Input(props) {

    return (
        <div>
            <input type={props.type} placeholder={props.password} />
           
        </div>
    )
}

export default Input;