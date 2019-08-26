import React, { Component } from 'react';

export class MovieDetails extends Component {
    
    render() {
        const { genres, production_countries, runtime, budget, revenue
              } = this.props.movie;

        let generalInfo = {
            // "Genres": genres,
            // "Countries": production_countries,
            "Runtime": runtime + " min",
            "Budget": (budget == 0 ? "No info" : budget),
            "Revenu": (revenue == 0 ? "No info" : "$" + revenue)
        }
        console.log(this.props.movie)
        return (
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
        )
    }
}

export default MovieDetails;
