import React from "react";


function Form(props) {

    return (
        <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
                {
                    props.isRegisteres === false ?
                    (<input type="password" placeholder="Confirm Password" />) : null
                }

            <button className="eeu-btn-primary" type="submit">
                {props.isRegistered ? "Login": "Register" }
            </button>


        </form>

    )

}

export default Form;