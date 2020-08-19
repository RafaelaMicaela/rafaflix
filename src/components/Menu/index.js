import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/"> 
                <img className="Logo" src={Logo} alt="Rafaflix Logo" />
            </a>
        </nav>
    );
}

export default Menu;