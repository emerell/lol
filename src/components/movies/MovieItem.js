import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class MovieItem extends Component {

    truncateOverviewText = maxlength => {
        const text = this.props.movieItem.overview;

        return (text.length > maxlength) ?
            text.slice(0, maxlength - 1) + '...' : text;
    }

    getMovieReleaseYear = releaseDate => ` (${releaseDate.slice(0, 4)})`

    render() {
        const { id, title, poster_path, genre_ids, release_date } = this.props.movieItem;
        const genres = this.props.getMovieGenres(genre_ids);

        const posterImageUrl = `https://image.tmdb.org/t/p/w342${poster_path}`
        const movieUrl = `/${id}`

        return (
            <div className="column is-half-desktop">
                <article className="movie-card">
                    <Link to={movieUrl} className="movie-card__poster-box">
                        <div className="movie-card__background"
                            style={{ backgroundImage: `url(${posterImageUrl})` }}>
                        </div>
                        <img src={posterImageUrl} className="movie-card__poster"></img>
                    </Link>
                    <div className="movie-card__info-box">
                        <h2 className="movie-card__title">
                            <Link to={movieUrl} className="link">{title}</Link>
                            <span className="movie-card__release-year">{this.getMovieReleaseYear(release_date)}</span>
                        </h2>
                        <div className="movie-card__genres">
                            {genres.map(genre => (
                                <a href="#" className="movie-card__genre tag" key={genre.id}>{genre.name}</a>
                            ))}
                        </div>
                        <p className="movie-card__overview">{this.truncateOverviewText(150)}</p>
                        <footer className="movie-card__footer">
                            <svg width="24" className="heart-icon" fill="currentColor" height="24" viewBox="0 0 24 24">
                                <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
                            </svg>
                        </footer>
                    </div>
                </article>
            </div>
        )
    }
}

MovieItem.propTypes = {
    movieItem: PropTypes.object.isRequired
}

export default MovieItem;
