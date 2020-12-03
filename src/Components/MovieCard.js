import React from 'react'

class MovieCard extends React.Component{
    state = {
        clicked: false
    }

    rentMeClickHandler = () => {
        // console.log("I've been rented! ", props)
        this.props.clickHandler(this.props.movie)
    }

    synopsisClickHandler = () => {
        // console.log("render for synopsis")
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return (
            <div className="movie-card" onClick={this.rentMeClickHandler}>
                <h2>{this.props.movie.title}</h2>
                <span>
                    <button onClick={this.synopsisClickHandler}>synopsis</button>
                    {this.state.clicked ? <p>{this.props.movie.synopsis}</p> : null}
                </span>
            </div>
        )
    }

}

export default MovieCard