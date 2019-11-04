import React, { useState, useCallback } from 'react';
import './SelectBox.scss';
import OptionBox from './OptionBox';

type SelectBoxProps = {
    name: string;
    optionList: string[];
}

function SelectBox({name, optionList}: SelectBoxProps) {
    const [selected, setSelected ] = useState<string>(name);
    const [optionVisible, setOptionVisible] = useState<boolean>(false);
    const handleOptionSelect = useCallback((option) => {
        setSelected(option);
        setOptionVisible(false);
    }, []);

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