import React, { Component } from 'react';

export class MovieCast extends Component {

    render() {
        return (
            <section className="movie-cast section">
                <div className="container">
                    <h2 className="movie-cast__title title">Cast</h2>
                    <div className="columns movie-cast__list scroll-list">
                        {this.props.cast.map(actor => (
                            <div className="column movie-cast__item" key={actor.id}>
                                <div className="actor-card">
                                    {actor.profile_path ? 
                                        <div className="actor-card__img-box">
                                            <img 
                                                alt={actor.name} 
                                                src={`https://image.tmdb.org/t/p/w342${actor.profile_path}`} 
                                                className="actor-card__img"
                                                />
                                        </div>
                                        : 
                                        <div className="actor-card__img-box">
                                            <span className="actor-card__img-fallback">{actor.name}</span>
                                        </div>
                                    }
                                    <h3 className="actor-card__name">{actor.name}</h3>
                                    <p className="actor-card__character">{actor.character}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> 
            </section>
        )
    }
}

export default MovieCast;
