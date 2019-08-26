import React, { Component } from 'react';

import MovieDetails from './MovieDetails';

export class MovieInfo extends Component {

    render() {
        const { title, release_date, tagline, poster_path, 
                    vote_average, overview, vote_count
              } = this.props.movie;

        const posterImageUrl = `https://image.tmdb.org/t/p/w342${poster_path}`

        return (
            <section className="movie">
                <div className="container">
                    <h1 className="movie__title">{title}
                        {this.props.movie && this.props.movie.release_date &&
                            <span className="movie__release-year">
                                &nbsp;({this.props.getMovieReleaseYear(release_date)})
                            </span>
                        }
                    </h1>
                    <p className="movie__tagline">{tagline}</p>
                    <div className="columns">
                        <div className="column">
                            <img src={posterImageUrl} className="movie__poster"/>
                        </div>
                        <div className="column is-8">
                            <span className="movie-rating">
                                <svg width="40" height="40" viewBox="0 0 24 24" className="movie-rating__icon" fill="currentColor">
                                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                                </svg>
                                <div className="movie-rating__box">
                                    <span className="movie-rating__average-box">
                                        <span className="movie-rating__average">{vote_average}</span>
                                        <span>/10</span>
                                    </span>
                                    <span className="movie-rating__total-votes">{vote_count} votes</span>
                                </div>
                            </span>
                            <MovieDetails movie={this.props.movie}/>
                            <h2 className="movie__subtitle">Overview</h2>
                            <p className="movie__overview">{overview}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default MovieInfo;
