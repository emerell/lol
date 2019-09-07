import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class AutocompleteSearch extends Component {
    state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    };

    onChange = e => {
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;

        const filteredSuggestions = suggestions.filter(
        suggestion =>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
        });
    }

    onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;

        if (e.keyCode === 13) {
            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion]
            });
        } else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }
            this.setState({ activeSuggestion: activeSuggestion - 1 });
        } else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }
            this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
    };

    render() {
        const {
            onChange,
            onClick,
            onKeyDown,
            state: {
                activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                userInput
            }
        } = this;

        let suggestionsListComponent;

        console.log(showSuggestions && userInput)

        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <div>
                        {filteredSuggestions.map((suggestion, index) => {
                            let className = "dropdown__item";

                            if (index === activeSuggestion) {
                                className = "dropdown__item dropdown__item--active";
                            }

                            return (
                                <Link
                                    className={className}
                                    key={suggestion}
                                    onClick={onClick}
                                >
                                    {suggestion}
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
                <button type="button" className="dropdown__toggle-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/>
                   </svg>
                </button>
                <div className="dropdown__menu">
                    <div className="dropdown__content">
                        <div className="dropdown__item">
                            <input
                                className="base-input" 
                                type="text"
                                placeholder="Type movie name"
                                onChange={onChange}
                                onKeyDown={onKeyDown}
                                value={userInput}
                            />
                        </div>
                        <span className="dropdown__divider"></span>
                        {suggestionsListComponent}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AutocompleteSearch;