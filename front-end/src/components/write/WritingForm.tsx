import React from 'react';

function WritingForm() {
    return(
        <>
        <h2>스터디 만들기</h2>
        <form>
            <input type = 'text' placeholder = '스터디 이름'></input>
            <input type = 'text' placeholder = '스터디 장소'></input>
            <input type = 'text' placeholder = '참가비'></input>
        </form>
        </>
    )
}

export default WritingForm;