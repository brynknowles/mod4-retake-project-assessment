import './App.css';
import React from 'react'
import MovieList from './Containers/MovieList'
import RentedMovies from './Containers/RentedMovies'
import CreateForm from './Components/CreateForm'

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

  submitHandler = (movieObj) => {
    // e.preventDefault() -- i refactored and removed e as an argument here
    console.log("submitting", movieObj)
    // take the movieObj
    // add the movieObj to the current api in state
    this.setState({ api: [...this.state.api, movieObj]})
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
        <div className="form">
          <CreateForm submitHandler={this.submitHandler}/>
        </div>
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

// PART 2
// the submitHandler function takes in the movieObj as an argument, and adds it to the current api in state

// that will then trigger a re-render
// when the re-render, we will render all movies again, which will iterate through our state api which will now  have an additional movie, so we will get one additional MpvieCard once this component re-renders

// now that we've created the helper, we want to pass it down to the component that will need it, 

// PART 4
// we need the submitHandler in App.js to also have access to the event to preventDefault.
// go ahead and call e.preventDefault() in the submitHandler

// PART 6
// to refactor, remove the event argument and prevent default for the submit handler, since it is being handled in the child component now.

// the last thing to do  is, in our parent, now that we have access to the movieObj, we just want to take that object and add it to our api

///////////////////////////////////
