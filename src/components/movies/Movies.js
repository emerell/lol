import React, { Component } from 'react';

import MovieItem from './MovieItem';
import Pagination from '../Pagination';

import PropTypes from 'prop-types';

class Movies extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <h1 className="title mb-3rem">Popular movies</h1>
                    <Pagination 
                        currentPage={this.props.currentPage}
                        paginateToPreviousPage={this.props.paginateToPreviousPage}
                        paginateToNextPage={this.props.paginateToNextPage}
                    />
                    <div className="columns columns--movies">
                        {this.props.movies.map(movie => (
                            <MovieItem
                                key={movie.id}
                                movieItem={movie}
                                getMovieGenres={this.props.getMovieGenres}
                                getMovieReleaseYear={this.props.getMovieReleaseYear}
                            />
                        ))}
                    </div>
                    <Pagination 
                        currentPage={this.props.currentPage}
                        paginateToPreviousPage={this.props.paginateToPreviousPage}
                        paginateToNextPage={this.props.paginateToNextPage}
                    />
                </div>
            </div>
        )
    }
}

Movies.propTypes = {
    movies: PropTypes.array.isRequired
}

export default Movies;