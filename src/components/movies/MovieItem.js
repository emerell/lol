import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MovieItem extends Component {

    truncateOverviewText = maxlength => {
        const text = this.props.movieItem.overview;

        return (text.length > maxlength) ?
            text.slice(0, maxlength - 1) + '...' : text;
    }

    getMovieGenres = movieGenresIds => (
        this.props.genres.filter(genre => movieGenresIds.includes(genre.id))
    )

    getMovieReleaseYear = releaseDate => ` (${releaseDate.slice(0, 4)})`

    render() {
        const { title, poster_path, genre_ids, release_date } = this.props.movieItem;
        const genres = this.getMovieGenres(genre_ids);
        const posterImageUrl = `https://image.tmdb.org/t/p/w342${poster_path}`
        return (
            <div className="column">
                <article className="movie-card">
                    <a href="#" className="movie-card__poster-box">
                        <div className="movie-card__background"
                            style={{ backgroundImage: `url(${posterImageUrl})` }}>
                        </div>
                        <img src={posterImageUrl} className="movie-card__poster"></img>
                    </a>
                    <div className="movie-card__info-box">
                        <h2 className="movie-card__title">
                            <a href="#" className="link">{title}</a>
                            <span className="movie-card__release-year">{this.getMovieReleaseYear(release_date)}</span>
                        </h2>
                        <div className="movie-card__genres">
                            {genres.map(genre => (
                                <a href="#" className="movie-card__genre" key={genre.id}>{genre.name}</a>
                            ))}
                        </div>
                        <p className="movie-card__overview">{this.truncateOverviewText(150)}</p>
                        <footer className="movie-card__footer">
                            <p>like</p>
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
