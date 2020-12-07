import React from 'react'

// class SearchForm extends React.Component {
//     render() {
//         return (
            
//         )
//     }
// }

const SearchForm = ({ searchValue, changeHandler }) => {
    return (
        <form>
            <input type="text" value={searchValue} placeholder="search by title" onChange={changeHandler}/>
        </form>
    )
};

export default SearchForm;





// PART 8 
// create the search form component
// a search form is slightly different from a create form mainly because of where we are holding state
// create a functional component with a form and one input
