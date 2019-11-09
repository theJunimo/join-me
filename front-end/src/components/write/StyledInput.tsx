import React from 'react';
import './StyledInput.scss';

type StyledInputProps = {
    type: string;
    name: string;
    placeholder: string;
    width?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function StyledInput({type, name, width, placeholder, onChange}: StyledInputProps) {
    return(
        <input
            onChange = { onChange }
            className = 'StyledInput'
            style = {{width: width}}
            type = {type}
            name = {name}
            placeholder = {placeholder}
            />
    )
}

export default StyledInput;
