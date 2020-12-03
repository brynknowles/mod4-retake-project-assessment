import './App.css';
import React from 'react'
import MovieList from './Containers/MovieList'
import RentedMovies from './Containers/RentedMovies'

class App extends React.Component{

  state = {
    api: [],
    rentedFlicks: []
  }

  componentDidMount() {
    fetch("http://localhost:5000/movies")
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => {this.setState({ api: data})})
  }

  rentMovie = (movie) => {
    // console.log("movie in App", movie)
    let newArray = [...this.state.rentedFlicks, movie]
    this.setState({ rentedFlicks: newArray})
  }

  returnMovie = (movie) => {
    // console.log("rented flicks: ", this.state.rentedFlicks)
    const newArray = this.state.rentedFlicks.filter(movieObj => movieObj.id !== movie.id)
    this.setState({rentedFlicks: newArray})
  }

  // delete(item){
  //   const data = this.state.data.filter(i => i.id !== item.id)
  //   this.setState({data})
  // }

  filteredMovies = () => {
    const uniqueMovies = Array.from(new Set(this.state.rentedFlicks))
    return uniqueMovies
  }

  render() {
    return (
      <div className="App">
        <div className="movie-list-container">
          <MovieList movieArray={this.state.api} clickHandler={this.rentMovie}/>
        </div>
        <div className="rented-movies-container">
          <RentedMovies movieArray={this.filteredMovies()} clickHandler={this.returnMovie}/>
        </div>
      </div>
    )
  }
}

export default App;
