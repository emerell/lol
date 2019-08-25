import React, { Component } from 'react';

export class MovieDetails extends Component {

    getMovieReleaseYear = releaseDate => ` (${releaseDate.slice(0, 4)})`

    render() {
        const { title, release_date, tagline, poster_path, vote_average, overview,
                vote_count, genres, production_countries, runtime, budget, revenue
              } = this.props.movie;
        const posterImageUrl = `https://image.tmdb.org/t/p/w342${poster_path}`

        let generalInfo = {
            // "Genres": genres,
            // "Countries": production_countries,
            "Runtime": runtime + " min",
            "Budget": (budget == 0 ? "No info" : budget),
            "Revenu": "$" + revenue
        }
        return (
            <section className="movie">
                <div className="container">
                    <h1 className="movie__title">{title}
                        {/* <span className="movie__release-year">{this.getMovieReleaseYear(release_date)}</span> */}
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
                            <section className="movie-info-section">
                                <h2 className="visually-hidden">General info</h2>
                                {
                                Object.keys(generalInfo).map((key, value) => {
                                    return <div className="movie-info-line" key={value}>
                                                <div className="movie-info-line__category">{key}</div>
                                                <div className="movie-info-line__info">
                                                  <span className="movie-info-line__tag tag"> { generalInfo[key]} </span>
                                                </div>
                                            </div>
                                    })
                                }
                            </section>
                            <h2 className="movie__subtitle">Overview</h2>
                            <p className="movie__overview">{overview}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default MovieDetails;
