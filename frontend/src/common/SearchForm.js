import React, {useState} from 'react';
import './SearchForm.css';

const SearchForm = ({searchTerm}) => {
    const initialState = "";
    const [query, setQuery] = useState(initialState);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        searchTerm(query);
        setQuery(query);
    }

    const handleChange = (evt) => {
        setQuery(evt.target.value);
    }

    return (
        <div className='SearchForm'>
            <div className='SearchForm-container'>
                <form className="searchInput" onSubmit={handleSubmit}>
                    <label htmlFor='SearchInput'>Search Lunches by Keyword: </label>
                    <input 
                        type="text"
                        name="SearchInput"
                        id="SearchInput"
                        value={query}
                        onChange={handleChange}>
                    </input>
                    <span><button className='navBtn' type='submit'>Search!</button></span>
                </form>  
            </div> 
        </div>
    );
}

export default SearchForm;




{/* <div>
                <h4>OR</h4>
            </div>    
            <div>
                <form className="dietSearchInput" onSubmit={handleDietSearch}>    
                    <label htmlFor='dietTypeSearch'>Filter Lunches by Diet: </label>
                    <select name='dietTypeSearch' id="dietTypeSearch">
                        <option value="skhakidard" >Skhakidard</option>
                        <option value={gluten-free}>Gluten-Free</option>
                        <option value={dairy-free}>Dairy-Free</option>
                        <option value={nut-free}>Nut-Free</option>
                        <option value={paleo}>Paleo</option>
                        <option value={vegetarian}>Vegetarian</option>
                        <option value={vegan}>Vegan</option>
                    </select>
                    <br></br>
                    <button type='submit'>Search by Diet!</button>
                </form> 
            </div> */}