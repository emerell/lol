import React, { Component } from 'react';

export class MovieDetails extends Component {
    
    validateCurrencyView = moneyAmount => {
        const moneyStr = (+moneyAmount).toLocaleString() 
        const validMoneyAmount = moneyStr.split(',').join(' ')
        return "$" + validMoneyAmount
    }

    render() {
        const { genres, production_countries, runtime, budget, revenue
              } = this.props.movie;

        let generalInfo = {
            "Genres": genres,
            "Countries": production_countries,
            "Runtime": runtime + " min",
            "Budget": budget && this.validateCurrencyView(budget) || "No info" ,
            "Revenu": revenue && this.validateCurrencyView(revenue) || "No info"
        }
        return (
            <section className="movie-info-section">
                <h2 className="visually-hidden">General info</h2>
                { this.props.movie && this.props.movie.production_countries &&
                    Object.keys(generalInfo).map((key, value) => {
                        return <div className="movie-info-line" key={value}>
                                    <div className="movie-info-line__category">{key}</div>
                                    <div className="movie-info-line__info">
                                        { Array.isArray(generalInfo[key]) ? 
                                            generalInfo[key].map(tag => (
                                                <span 
                                                    className="movie-info-line__tag tag" 
                                                    key={generalInfo[key].indexOf(tag)}
                                                >{tag.name}</span>
                                            ))
                                        : 
                                            <span className="movie-info-line__tag tag"> {generalInfo[key]} </span>
                                        }
                                    </div>
                                </div>
                        })
                    }
            </section>
        )
    }
}

export default MovieDetails;
