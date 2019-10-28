import React from 'react';
import NavButton from 'components/common/NavButton';
import './MainBanner.scss';

function MainBanner() {
    return(
        <div className = 'MainBanner'>
            <div className = 'banner-content'>
                <p>내가 원하는 스터디가 없을 땐, <br/> 함께 공부할 열정 넘치는 친구들을 직접 <br/> 찾아보는건 어떠세요?</p>
                <div className = 'button-wrapper'><NavButton to = 'write' className = 'ButtonNav'>스터디 만들기</NavButton></div>
            </div>
            <img src = 'img/main.jpg' alt = 'banner'></img>
        </div>
    )
}

export default MainBanner;