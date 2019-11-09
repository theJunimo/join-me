import React, { useState } from 'react';
import './WritingForm.scss';
import SelectBox from 'components/common/selectBox/SelectBox';
import TimeSelection from'./TimeSelection';
import StyledInput from './StyledInput';
import DaySelection from './DaySelection';

function WritingForm() {
    const [form, setForm] = useState({
        name: '',
        place: '',
        people: '',
        price: '',
        day: '',
        time: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSelectBoxChange = (name: string, value: string) => {
        setForm({
            ...form,
            [name]: value
        })
    }

    return(
        <div className = 'writingform-wrapper'>
        <h2>스터디 만들기</h2>
        <form 
            className = 'WritingForm'>
            <SelectBox 
                name = '카테고리 선택'
                optionList = {['언어', 'IT / 프로그래밍', '고시 / 자격증', '취업', '독서', '운동', '기타']} 
                onChange = {handleSelectBoxChange}/>
            <StyledInput 
                type = 'text'
                name = 'name' 
                placeholder = '스터디 이름'
                onChange = {handleInputChange}/>
            <StyledInput 
                type = 'text' 
                name=  'place' 
                placeholder = '스터디 장소' 
                onChange = {handleInputChange}/>
            <StyledInput 
                type = 'number' 
                name = 'people' 
                placeholder = '참가인원' 
                width = '10rem'
                onChange = {handleInputChange}/>
            <StyledInput 
                type = 'number'
                name = 'price' 
                placeholder = '참가비' 
                width = '10rem'
                onChange = {handleInputChange}/>
            <DaySelection />
            <TimeSelection/>
            <button type = 'submit'>글 올리기</button>
        </form>
        </div>
    )
}

export default WritingForm;