import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchForm = () => {

    const [searchValue, setSearchValue] = useState("");

    const history = useHistory();

    const handleSearch = () => {
        history.push({
            ...history,
            search: `search=${searchValue}`,
        })
    }

    return (
        <>
        <div className="search-flights__form">
            <h2 className="search-flights__title">SEARCH FLIGHT</h2>
            <div className="wrapper">
            <i className='fa fa-search' ></i>
            <input 
                className="search-flights__input" 
                name="search" 
                type="text" 
                placeholder="Airline, destination or fligth #"
                value={searchValue}
                onChange={({target}) => setSearchValue(target.value)}
            />
            <button className="search-flights__btn" onClick={handleSearch}>
                <span className="search-flights__text">
                    SEARCH
                </span>
            </button>
            </div>
        </div>
        </>
    )
    
}

export default SearchForm;