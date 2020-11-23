import React from "react";
import Input from "./Input";

function Login(props) {
    return (
        <form className="form">
            <Input 
                type="text"
                placeholder="text"
            />
             <Input 
                type="password"
                placeholder="password"
            />
            
            <button className="eeu-btn-primary" type="submit">Login</button>
        </form>
    )

}

export default Login;