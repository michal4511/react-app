import React from 'react';
import {NavLink} from 'react-router-dom';

function TheNavigation() {
    return (
        <nav className="navigation">
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}

export default TheNavigation
