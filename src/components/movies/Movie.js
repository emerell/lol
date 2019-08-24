import React, { Component } from 'react';
import axios from 'axios';

export default class Movie extends Component {
    state = {
        movie: {}
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.movieId}?api_key=848fb762df71f7faf69c83a108de834a&language=en-US`)
        .then(response => this.setState({ movie: response.data }))
    }

    getMovieReleaseYear = releaseDate => ` (${releaseDate.slice(0, 4)})`

    render() {
        console.log(this.state.movie)
        const { title, release_date, tagline, poster_path, vote_average, 
                vote_count, genres, production_countries, runtime, budget, revenue
              } = this.state.movie;
        const posterImageUrl = `https://image.tmdb.org/t/p/w342${poster_path}`

        let generalInfo = {
            // "Genres": genres,
            // "Countries": production_countries,
            "Runtime": runtime,
            "Budget": (budget == 0 ? "no info" : budget),
            "Revenu": revenue
        }
        console.log(generalInfo)
        return (
            <article className="movie">
                <div className="container">
                    <h1 className="movie__title">{title}
                        {/* <span className="movie__release-year">{this.getMovieReleaseYear(release_date)}</span> */}
                    </h1>
                    <p className="movie__tagline">{tagline}</p>
                    <div className="columns">
                        <div className="column">
                            <img src={posterImageUrl} className="movie__poster"></img>
                        </div>
                        <div className="column">
                            <span className="movie__rating-box">
                                <span className="movie__rating">{vote_average}</span>
                                <span>/10</span>
                                <span className="movie__total-votes">{vote_count}</span>
                            </span>
                            <section className="movie-info-section">
                                <h2 className="visually-hidden">General info</h2>
                                {
                                Object.keys(generalInfo).map((key, value) => {
                                    return <div className="movie-info-line" key={value}>
                                                <div className="movie-info-line__category">{key}</div>
                                                <div className="movie-info-line__info tags">
                                                   { generalInfo[key]} 
                                                </div>
                                            </div>
                                    })
                                }
                            </section>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}
