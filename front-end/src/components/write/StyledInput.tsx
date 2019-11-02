import React from 'react';
import './StyledInput.scss';

type StyledInputProps = {
    type: string;
    name: string;
    placeholder: string;
    width?: string;
}

function StyledInput({type, name, width, placeholder}: StyledInputProps) {
    return(
        <input
            className = 'StyledInput'
            style = {{width: width}}
            type = {type}
            name = {name}
            placeholder = {placeholder}
            />
    )
}

export default StyledInput;
