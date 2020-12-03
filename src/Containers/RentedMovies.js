import React from 'react'
import MovieCard from '../Components/MovieCard'

class RentedMovies extends React.Component {

    renderRentedMovies = () => {
        return this.props.movieArray.map(movieObj => <MovieCard key={movieObj.id} movie={movieObj} clickHandler={this.props.clickHandler}/>)
    }

    render() {
        return (
            <div className="header">
                <h1>Rented Movies</h1>
                <div className="movie-container">
                    {this.renderRentedMovies()}
                </div>
            </div>
        )
    }
}

export default RentedMovies