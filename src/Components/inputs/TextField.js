import React from "react";

import './input.css';

const TextField = (props) => {
    return(
        <div className="textField">  
            <label>{props.label}</label>
            <input {...props} />
        </div>
    )
}

export default TextField;