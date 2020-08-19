import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';

function Menu() {
    return (
        <nav>
            <img class="Logo" src={Logo} alt="Rafaflix Logo" />
        </nav>
    );
}

export default Menu;