import React from 'react';
import './Footer.scss';
import NavButton from 'components/common/NavButton';

function Footer() {
    return(
        <footer>
            <div className = 'info'>
                <NavButton to = '' className = 'PlainNav'>개인정보 처리방침</NavButton>
                <a href = 'mailto:hyein.ju92@gmail.com' target = 'blank'>문의하기</a>
                <a href = 'https://github.com/theJunimo/join-me' target = 'blank'>Github</a>
            </div>
            <p><a href = 'https://hyeinju.me' target = 'blank'>made by HyeIn Ju<span role='img' aria-label = 'peace'>✌️</span></a></p>
        </footer>
    )
}

export default Footer;