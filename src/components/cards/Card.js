import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
import Name from "./Name";

function Card(props){
    

    return(
        
        <div className="note text-center flex-item">
            <Avatar imageAvatar={props.imgCard}/>
            <Name name={props.nameCard}/>
            <Detail detailInfo = {props.telCard}
            />
        
        </div>
    );
}

export default Card;