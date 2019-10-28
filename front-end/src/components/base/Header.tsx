import React from 'react';
import NavButton from 'components/common/NavButton';
import './Header.scss';

type navMenu = {
    text: string;
    to: string;
}
type HeaderProps = {
    logo: string;
    menus: navMenu[];
};

function Header({logo, menus}: HeaderProps) {
    return(
        <header className = 'main-header'>
            <h1>{logo}</h1>
            <ul className = 'header-menu'>
                {menus.map((el, idx) => <li key = {idx}><NavButton to = {el.to} className = 'PlainNav'>{el.text}</NavButton></li>)}
            </ul>
        </header>
    )
}

export default Header;