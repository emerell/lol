import React, { useState } from 'react';
import AutocompleteSearch from '../AutocompleteSearch';

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
                    <div className="app-navbar__dropdown dropdown is-hidden-desktop">
                        <AutocompleteSearch 
                        suggestions={[
                            "Alligator",
                            "Bask",
                            "Crocodilian",
                            "Death Roll",
                            "Eggs",
                            "Jaws",
                            "Reptile",
                            "Solitary",
                            "Tail",
                            "Wetlands"
                            ]}
                        />
                    </div>
                </div>
                <nav className="header__navbar is-hidden-touch">
                    <div className="navbar navbar--start">
                        <a href="#" className="navbar__item">Home</a>
                        <a href="#" className="navbar__item">Shows</a>
                        <a href="#" className="navbar__item">Movies</a>
                    </div>
                    <div className="navbar navbar--end">
                        <div className="app-navbar__dropdown dropdown is-hidden-touch">
                            <AutocompleteSearch 
                        suggestions={[
                            "Alligator",
                            "Bask",
                            "Crocodilian",
                            "Death Roll",
                            "Eggs",
                            "Jaws",
                            "Reptile",
                            "Solitary",
                            "Tail",
                            "Wetlands"
                            ]}
                        />
                        </div>
                        <a href="#" className="navbar__item">Login</a>
                        <a href="#" className="navbar__item">Sign up</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}
