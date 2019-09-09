import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AutocompleteSearch extends Component {
    state = {
      suggestions: [],
      showSuggestions: false,
      userInput: "",
      isToggleOn: false
    };

    fetchSearchMoviesData = searchString => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=848fb762df71f7faf69c83a108de834a&language=en-US&query=${searchString}&page=1&include_adult=false`)
            .then(response => this.setState({ suggestions: response.data.results.slice(0, 10) }));
    }


    onChange = e => {
        const { suggestions } = this.state;
        const userInput = e.currentTarget.value;
        this.fetchSearchMoviesData(userInput);

        this.setState({
            showSuggestions: true,
            userInput: e.currentTarget.value
        });
    }

    onClick = e => {
        this.setState({
        showSuggestions: false,
        userInput: ""
        });
    };

    toggleSearchList() {
        const dropdownMenuElAll = document.querySelectorAll('.dropdown__menu');

        Array.from(dropdownMenuElAll).map(
            dropdownEl => dropdownEl.classList.toggle('is-hidden')
            );
        this.setState({isToggleOn: !this.state.isToggleOn})
    }

    render() {
        const {
            onChange,
            onClick,
            toggleSearchList,
            state: {
                suggestions,
                showSuggestions,
                userInput,
                isToggleOn
            }
        } = this;

        let suggestionsListComponent;

        if (showSuggestions && userInput) {
            if (suggestions.length) {
                suggestionsListComponent = (
                    <div>
                        <span className="dropdown__divider"></span>
                        {suggestions.map(suggestion => {
                            let className = "dropdown__item";

                            return (
                                <Link 
                                    to={`/${suggestion.id}`}
                                    className={className}
                                    key={suggestion.id}
                                    onClick={onClick}
                                >
                                    {suggestion.title}
                                </Link>
                            );
                        })}
                    </div>
                );
            } else {
                suggestionsListComponent = (
                    <p className="dropdown__item">No suggestions, you're on your own!</p>
                );
            }
        }

        return (
            <Fragment>
                <button type="button" onClick={toggleSearchList.bind(this)} className="dropdown__toggle-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        { isToggleOn ? 
                                <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
                            :
                                <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/>
                            }
                   </svg>
                </button>
                <div className="dropdown__menu is-hidden">
                    <div className="dropdown__content">
                        <div className="dropdown__item-input">
                            <input
                                className="base-input" 
                                spellCheck="false"
                                type="text"
                                placeholder="Type movie name"
                                onChange={onChange}
                                value={userInput}
                            />
                        </div>
                        {suggestionsListComponent}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AutocompleteSearch;