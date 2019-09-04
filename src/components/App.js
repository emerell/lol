import React, { Component, Fragment } from 'react';
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
        currentPage: 1
    }

    componentDidMount() {
        this.fetchPopularMoviesData();

        axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=848fb762df71f7faf69c83a108de834a&language=en-US")
            .then(response => this.setState({ genres: response.data.genres }));
    }

    componentDidUpdate(prevProps) {
        window.scrollTo(0, 0);
    }

    fetchPopularMoviesData = () => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=848fb762df71f7faf69c83a108de834a&language=en-US&page=${this.state.currentPage}`)
            .then(response => this.setState({ movies: response.data.results }));
    }

    getMovieReleaseYear = releaseDate => releaseDate.slice(0, 4)

    getMovieGenres = movieGenresIds => (
        this.state.genres.filter(genre => movieGenresIds.includes(genre.id))
    )

    decreaseCurrentPageValue = () => {
        this.setState({ currentPage: this.state.currentPage - 1}, 
        () => this.fetchPopularMoviesData());
    }

    increaseCurrentPageValue = () => {
        this.setState({ currentPage: this.state.currentPage + 1}, 
        () => this.fetchPopularMoviesData());
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                    <Switch>
                        <Route exact path="/" render={props => (
                            <Movies
                                movies={this.state.movies}
                                getMovieGenres={this.getMovieGenres}
                                getMovieReleaseYear={this.getMovieReleaseYear}
                                currentPage={this.state.currentPage}
                                decreaseCurrentPageValue={this.decreaseCurrentPageValue}
                                increaseCurrentPageValue={this.increaseCurrentPageValue}
                            />
                        )} />
                        <Route exact path="/:number" render={props => (
                            <MoviePage
                                movieId={props.match.params.number}
                                getMovieReleaseYear={this.getMovieReleaseYear}
                            />
                        )} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
