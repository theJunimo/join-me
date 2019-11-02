import React, { useState, useCallback } from 'react';
import './DaySelection.scss';
import SelectBox from 'components/common/selectBox/SelectBox';
import ToggleButton from 'components/common/ToggleButton';

function DaySelection() {
    const [selectedDays, setSelectedDays] = useState(['']); 

    const handleClick = useCallback((day) => {
        console.log('전체' + day);
        const days = selectedDays.map((day) =>{
            if(selectedDays.indexOf(day)) return selectedDays.filter((el) => (el !== day));
            return selectedDays.push(day);
        });

        console.log(days);
    }, [selectedDays]);

    return(
        <div className = 'DaySelection'>
            <SelectBox name = '날짜 선택' optionList = {['매주', '격주']}/>
            <div className = 'daysList'>
                {['월','화','수','목','금','토','일'].map((el, idx) => (
                    <ToggleButton key = { idx } onClick = { handleClick } >{ el + '요일' }</ToggleButton>
                ))}
            </div>
        </div>
    )
}

export default DaySelection;