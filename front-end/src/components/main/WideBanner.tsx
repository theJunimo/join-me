import React from 'react';
import './WideBanner.scss';
import NavButton from 'components/common/NavButton';

type WideBannerProps = {
    text: string;
    buttonText: string;
};

function WideBanner({text, buttonText}: WideBannerProps) {
    return(
        <div className = 'WideBanner'>
            <p>{text}</p>
            <div className = 'button-wrapper'>
            <NavButton to = 'search' className = 'ButtonNavWithBorder'>{buttonText}</NavButton>
            </div>
        </div>
    );
};

export default WideBanner;