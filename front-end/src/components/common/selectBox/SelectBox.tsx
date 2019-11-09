import React, { useState } from 'react';
import './SelectBox.scss';
import OptionBox from './OptionBox';

type SelectBoxProps = {
    name: string;
    optionList: string[];
    onChange: (type:string, option:string) => void;
}

function SelectBox({name, optionList, onChange}: SelectBoxProps) {
    const [selected, setSelected ] = useState<string>(name);
    const [optionVisible, setOptionVisible] = useState<boolean>(false);
    const handleOptionSelect = (option: string) => {
        setSelected(option);
        setOptionVisible(false);
        onChange(name, option);
    };

    return(
        <div className = 'SelectBox'>
            <div className = 'selectBtn' onClick = {() => setOptionVisible(!optionVisible)}>
                {selected}
            </div>
            {optionVisible && <OptionBox optionList = { optionList } onClick = { handleOptionSelect }/>}
        </div>
    )
}

export default SelectBox;