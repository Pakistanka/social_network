import React from 'react';
import navbar from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={navbar.nav}>
            <div><a href="/profile" className={`${navbar.item} ${navbar.active}`}>Profile</a></div>
            <div><a href="/dialogs" className={navbar.item}>Messages</a></div>
            <div><a href="/news" className={navbar.item}>News</a></div>
            <div><a href="/music" className={navbar.item}>Music</a></div>
            <div><a href="/settings" className={navbar.item}>Settings</a></div>
        </nav>
    );
}

export default Navbar;