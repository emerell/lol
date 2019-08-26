import React, { Component } from 'react';
import axios from 'axios';

import MovieInfo from '../movies/MovieInfo';
import MovieCast from '../movies/MovieCast';
import MovieRecommendations from '../movies/MovieRecommendations';

export class MoviePage extends Component {
    state = {
        movie: {},
        cast: [],
        recommendations: []
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.movieId}?api_key=848fb762df71f7faf69c83a108de834a&language=en-US`)
        .then(response => this.setState({ movie: response.data }))

        axios.get(`https://api.themoviedb.org/3/movie/${this.props.movieId}/credits?api_key=848fb762df71f7faf69c83a108de834a`)
        .then(response => this.setState({ cast: response.data.cast }))

        axios.get(`https://api.themoviedb.org/3/movie/${this.props.movieId}/recommendations?api_key=848fb762df71f7faf69c83a108de834a&language=en-US&page=1`)
        .then(response => this.setState({ recommendations: response.data.results }))
    }

    render() {
        return (
            <article>
                <MovieInfo 
                    movie={this.state.movie}
                    getMovieReleaseYear={this.props.getMovieReleaseYear}
                     />
                <MovieCast cast={this.state.cast} />
                <MovieRecommendations 
                    recommendations={this.state.recommendations.slice(11)}
                    getMovieReleaseYear={this.props.getMovieReleaseYear}
                     />
            </article>
        )
    }
}

export default MoviePage;
