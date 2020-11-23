import React from "react";

function Avatar(props) {

    return(
        <div className="eeu-card-img">
            <img src={props.imageAvatar}/>
        </div>
        
    );

}

export default Avatar;