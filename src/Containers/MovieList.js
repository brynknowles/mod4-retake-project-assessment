import React from 'react'
import MovieCard from '../Components/MovieCard'

class MovieList extends React.Component {

    renderMovieList = () => {
        return this.props.movieArray.map(movieObj => <MovieCard key={movieObj.id} movie={movieObj} clickHandler={this.props.clickHandler}/>)
    }

    render() {
        return (
            <div className="header">
                <h1>Movie List</h1>
                <div className="movie-container">
                    {this.renderMovieList()}
                </div>

            </div>

        )
    }
}

export default MovieList