import React from 'react';

export default function Header() {
    return (
        <div>
            <header class="header">
                <div className="header__logo">
                    <a href="#">lol</a>
                </div>
                <nav className="header__navbar">
                    <div className="navbar-start">
                        <a href="#" className="navbar__item">Home</a>
                        <a href="#" className="navbar__item">Shows</a>
                        <a href="#" className="navbar__item">Movies</a>
                    </div>
                    <div className="navbar-end">
                        <div className="app-search"></div>
                        <a href="#" className="navbar__item">Login</a>
                        <a href="#" className="navbar__item">Sign up</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}
