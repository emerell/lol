import React, { useState } from 'react';

export default function Header() {
    const [isToggleOn, setIsToggleOn] = useState(false);

    function toggleNavigationList() {
        const headerNavbarEl = document.querySelector('.header__navbar');

        headerNavbarEl.classList.toggle('is-hidden-touch');
        setIsToggleOn(!isToggleOn);
    }

    return (
        <div className="container">
            <header className="header">
                <div className="app-navbar">
                    <button onClick={toggleNavigationList.bind(this)} type="button" className="app-navbar__toggle-button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            { isToggleOn ? 
                                <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
                            :
                                <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
                            }
                        </svg>
                    </button>
                    <a href="/" className="app-navbar__logo">
                        <div className="app-logo">
                            <span className="app-logo__letter">L</span>
                            <span className="app-logo__letter">O</span>
                            <span className="app-logo__letter">L</span>
                        </div>
                    </a>
                    <button type="button" className="app-navbar__search is-hidden-desktop">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/>
                        </svg>
                    </button>
                </div>
                <nav className="header__navbar is-hidden-touch">
                    <div className="navbar navbar--start">
                        <a href="#" className="navbar__item">Home</a>
                        <a href="#" className="navbar__item">Shows</a>
                        <a href="#" className="navbar__item">Movies</a>
                    </div>
                    <div className="navbar navbar--end">
                        <button type="button" className="app-navbar__search is-hidden-touch">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/>
                            </svg>
                        </button>
                        <a href="#" className="navbar__item">Login</a>
                        <a href="#" className="navbar__item">Sign up</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}
