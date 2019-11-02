import React from 'react';
import './WritingForm.scss';
import SelectBox from 'components/common/selectBox/SelectBox';
import TimeSelection from'./TimeSelection';
import StyledInput from './StyledInput';
import DaySelection from './DaySelection';

function WritingForm() {
    return(
        <>
        <h2>스터디 만들기</h2>
        <form className = 'WritingForm'>
            <SelectBox 
                name = '카테고리 선택' 
                optionList = {['언어', 'IT / 프로그래밍', '고시 / 자격증', '취업', '독서', '운동', '기타']} />
            <StyledInput type = 'text' name = 'name' placeholder = '스터디 이름'/>
            <StyledInput type = 'text' name=  'place' placeholder = '스터디 장소' />
            <StyledInput type = 'text' name = 'price' placeholder = '참가인원' width = '10rem'/>
            <StyledInput type = 'text' name = 'price' placeholder = '참가비' width = '10rem'/>
            <TimeSelection/>
            <DaySelection />
            <button type = 'submit'>글 올리기</button>
        </form>
        </>
    )
}

export default WritingForm;