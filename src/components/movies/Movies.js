import React, { Component } from 'react';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

class Movies extends Component {

    render() {
        return (
            <div className="section">
                <div className="container">
                    <h1 className="title mb-3rem">Popular movies</h1>
                    <div className="columns">
                        {this.props.movies.map(movie => (
                            <MovieItem
                                key={movie.id}
                                movieItem={movie}
                                getMovieGenres={this.props.getMovieGenres}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

Movies.propTypes = {
    movies: PropTypes.array.isRequired
}

export default Movies;