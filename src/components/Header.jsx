import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/storyBound.png';

export default function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    return (
        <header className="header">
            <img src={logo} alt="Storybound.ai logo" className="logo" />
            {!isHomePage && (
                <Link to="/" className="home-link">Home</Link>
            )}
        </header>
    );
}
