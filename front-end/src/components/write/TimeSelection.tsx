import React from 'react';
import './TimeSelection.scss';
import SelectBox from 'components/common/selectBox/SelectBox';

function TimeSelection() {
    const getTimeArr = 
        Array(48).fill(0).map((el, idx) => {
            const min = 30 * (idx);
            const hour = Math.floor(min / 60);

            const hourStr = (hour < 10)? '0' + hour : ''+ hour;
            const minStr = (min % 60 === 30)? '30' : '00';

            return hourStr + ':' + minStr;
        });

    return(
        <div className = 'TimeSelection'>
            <SelectBox name = '오전/오후' optionList = {['오전', '오후']}></SelectBox>
            <SelectBox name = '시간대 선택' optionList = {getTimeArr}></SelectBox>
            <span> ~ </span>
            <SelectBox name = '오전/오후' optionList = {['오전', '오후']}></SelectBox>
            <SelectBox name = '시간대 선택' optionList = {getTimeArr}></SelectBox>
        </div>
    )
}

export default TimeSelection;
