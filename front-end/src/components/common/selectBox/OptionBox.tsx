import React from 'react';
import './OptionBox.scss';

type OptionBoxProps = {
    optionList: string[];
    onClick: (option: string) => void;
}

function OptionBox({optionList, onClick}: OptionBoxProps) {
    return(
        <div className = 'OptionBox'>
            <ul>
                {optionList.map((el, idx) => <li key = {idx} onClick = {() => onClick(el)}>{el}</li>)}
            </ul>
        </div>
    )
}

export default OptionBox;