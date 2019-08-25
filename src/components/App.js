import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Movies from './movies/Movies';
import MoviePage from './pages/MoviePage';
import Header from './layout/Header';

require('../styles/style.styl');

export class App extends Component {
    state = {
        movies: [],
        genres: [],
    }

    componentDidMount() { //TODO: This request should be changed after adding paggination
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=%20848fb762df71f7faf69c83a108de834a&language=en-US&page=1")
            .then(response => this.setState({ movies: response.data.results }))

        axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=848fb762df71f7faf69c83a108de834a&language=en-US")
            .then(response => this.setState({ genres: response.data.genres }))
    }

    getMovieGenres = movieGenresIds => (
        this.state.genres.filter(genre => movieGenresIds.includes(genre.id))
    )

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" render={props => (
                            <Movies
                                movies={this.state.movies}
                                getMovieGenres={this.getMovieGenres}
                            />
                        )} />
                        <Route exact path="/:number" render={props => (
                            <MoviePage
                                movieId={props.match.params.number}
                            />
                        )} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
