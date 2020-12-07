import React from 'react'

class CreateForm extends React.Component {
    state = {
        title: "",
        synopsis: ""
    }

    changeHandler = (e) => {
        console.log("changing", e.target.value)
        // listen for a change
        // find the key in state that should be changed
        // re-render our component
        this.setState({ [e.target.name]: e.target.value })
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
        this.setState({ 
            title: "",
            synopsis: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.localSubmitHandler}>
                <input type="text" placeholder="title" name="title" value={this.state.title} onChange={this.changeHandler} />
                <input type="text" placeholder="synopsis" name="synopsis" value={this.state.synopsis} onChange={this.changeHandler} />
                {/* <input type="submit" aria-role="button">Submit</input> */}
                <button>Submit</button>
            </form>
        )
    }

}

export default CreateForm

// PART 1

// id, title, synopsis

// the application controls the value for the input in a controlled form, not the user

// drop downs, checkbox, radio buttons need to be controlled

// control the value, but let it be dynamically updated as the user inputs info in the field

// the DOM needs to listen to the change, but not be responsible for rendering the experience for the user

// tell the DOM to listen for when a user makes a change to the input, but then pass that information to the app. the app will then take that information and store it in state so that the app remembers what the user has typed in, and then the app will manually update the value based on what's happening in state.

// if you're grabbing an onChange then you're telling it to listen for a change, and any time the change happens, it will send you that event and you will be able to grab the data

// inside of the state, we want a key to represent each input. if a user is typing in text, update the key value in state so that we can update the value in the app

// then tell your application that in order to get the value for those keys, take a look at state and grab whatever the value is in the matching key.

// create a change handler function to listen for a change, don't forget to add e.preventDefault(). find the key in state that should be changed and re-render the component

// add an onChange attribute to the form input

// now, whenever a user makes a change in our DOM, we need a way for our App to connect to the DOM to speak to it and ask it to give it the event to be able to see what the user is typing in. We need to pass in the event as an argument of the event to our event listener (changeHandler), and then target the name keyword so we know which input the event is happening in. so, e.target.name

// by giving our inputs the name attribute, we are now able to determine which of our inputs are being changed, and then what the user is actually typing into that input (e.target.value)

// now we grab the value that the user is typing in, and update the value in state to make it dynamic, use ES6 syntax and tell it to look at the target name, because the names line up with the actual keys inside of our state, and set it equal to e.target.value. this.setState({ [e.target.name]: e.target.value}). React will actually concatenate the string for us, so instead of replacing the string each time, it will remember what the last input was and it will just keep adding onto that string

// each input doesn't have to have its own onChange function, you can make an if else conditional inside of the changeHandler or a switch rather than multiple functions

// so now when we type, it should update the value in state for the specific input, everytime it updates it should re-render, which means we get a second chance to read this value and this value should be updated as we go along

// generally you will have state for the input, you will control the value of the input, you will have some type of change handler to update your state value

// how do we now submit this information to get it added to our api? We have to get the information from our form up into the state that holds the api. This means we will need a callback function.

// Remember whenever we are communicating from the bottom of our hierarchy to the top of our hierarchy, the helper function always goes inside of the component whose state we are changing

// we would create a helper function to handle the submit of the new movie (this function will be called submitHandler, and will live in App.js in this app)

// PART 3

// add our onSubmit, and have it call this.props.submitHandler

// PART 5
// console.log and test

// It's better to use a button instead of input type="submit", for accessibility reasons-- you want to make sure you are using the html element that most closely describes the function of the element

// we need for the input information to now be passed up with our submit, by passing in the event first and then this.state into the onSubmit callback function
// to prevent invoking the function every time, we wrap it in another function -- this process of wrapping a function inside of another function is called thunk -- we want to delay the execution of the inner function by wrapping it in another function

// HOWEVER, instead of doing it inline, create a localSubmitHandler helper function -- this helper function still passes in the event so it needs to take in the event, but it is a property on the instance of createForm, we can just use this.state 

// a refactor would be to call e.preventDefault in the localSubmitHandler function instead of in App.js submitHandler function

// PART 7 
// prevent the user from entering the same data
// in the local submit handler, set the state with empty strings for each input

// what's happening in local submit handler:
// prevent default
// call the submit handler from our props
// pass in our object
// set state on the create form component and change the value of each of the input keys to an empty string.

////////////////////////////////

