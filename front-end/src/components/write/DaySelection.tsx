import React, { useState, useCallback } from 'react';
import './DaySelection.scss';
import SelectBox from 'components/common/selectBox/SelectBox';
import ToggleButton from 'components/common/ToggleButton';

function DaySelection() {
    const [selectedDays, setSelectedDays] = useState<string[]>([]); 
    
    const handleClick = useCallback((day) => {
        const days: string[] = (selectedDays.indexOf(day) !== -1)
                        ? 
                        selectedDays.filter((el) => (el !== day)) 
                        : 
                        selectedDays.concat([day]);
        setSelectedDays(days);
    }, [selectedDays]);

    return(
        <div className = 'DaySelection'>
            <SelectBox name = '매주 / 격주' optionList = {['매주', '격주']}/>
            <div className = 'daysList'>
                {['월','화','수','목','금','토','일'].map((el, idx) => (
                    <ToggleButton key = { idx } onClick = { handleClick } >{ el }</ToggleButton>
                ))}
            </div>
        </div>
    )
}

export default DaySelection;