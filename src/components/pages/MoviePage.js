import React, { Component } from 'react';
import axios from 'axios';

import MovieDetails from '../movies/MovieDetails';
import MovieCast from '../movies/MovieCast';

export class MoviePage extends Component {
    state = {
        movie: {},
        cast: []
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.movieId}?api_key=848fb762df71f7faf69c83a108de834a&language=en-US`)
        .then(response => this.setState({ movie: response.data }))

        axios.get(`https://api.themoviedb.org/3/movie/${this.props.movieId}/credits?api_key=848fb762df71f7faf69c83a108de834a`)
        .then(response => this.setState({ cast: response.data.cast }))
    }

    render() {
        return (
            <article>
                <MovieDetails movie={this.state.movie} />
                <MovieCast cast={this.state.cast}/>
            </article>
        )
    }
}

export default MoviePage;
