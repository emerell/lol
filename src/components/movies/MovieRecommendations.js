import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MovieRecommendations extends Component {
    
    render() {
        return (
            <section className="movie-recommendation section">
                <div className="container">
                    { this.props.recommendations.length ? 
                        <h2 className="movie-recommendation__title title">Recommendations</h2>
                    : 
                        (null)
                    }
                    <div className="columns movie-recommendation__list scroll-list">
                        {this.props.recommendations.map(recommendation => (
                            <div className="column movie-recommendation__item" key={recommendation.id}>
                                <div className="movie-simple-card">
                                    <Link to={`/${recommendation.id}`} className="movie-simple-card__img-box">
                                        <img 
                                            alt={recommendation.title} 
                                            src={`https://image.tmdb.org/t/p/w342${recommendation.poster_path}`} 
                                            className="movie-simple-card__img"
                                            />
                                    </Link>
                                    <h3 className="movie-simple-card__title">{recommendation.title}</h3>
                                    <p className="movie-simple-card__year">
                                        {this.props.getMovieReleaseYear(recommendation.release_date)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}

export default MovieRecommendations;
