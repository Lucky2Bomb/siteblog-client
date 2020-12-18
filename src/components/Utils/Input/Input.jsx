import React from "react";
import "../../../less/style.scss";

const Input = (props) => {
    return (
        
        <input
            type={props.type}
            onChange={(event) => {
                props.setValue(event.target.value);
            }}
            value={props.value}
            placeholder={props.placeholder}
            className={props.className ? props.className : "form-input"}
        />
    )
}

export default Input;
