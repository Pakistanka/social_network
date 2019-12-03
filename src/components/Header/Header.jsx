import React from 'react';
import header from './Header.module.scss';

const Header = () => {
    return (
        <header className={header.header}>
            <img src="https://i.pinimg.com/originals/06/52/6a/06526a7805cba3ec66b0b6b4aea63c69.jpg" alt=""/>
        </header>
    );
}

export default Header;