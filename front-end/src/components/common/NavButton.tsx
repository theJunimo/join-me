import React from 'react';
import './NavButton.scss';
import { NavLink } from 'react-router-dom';

type buttonStyle = 'PlainNav' | 'ButtonNav' | 'ButtonNavWithBorder';

type NavButtonProps = {
    className: buttonStyle;
    to: string;
    children: string;
}

function NavButton({to, className, children}: NavButtonProps) {
    return(
        <NavLink
            to = {to}
            className = {className}>
        {children}
        </NavLink>
    )
}

export default NavButton;