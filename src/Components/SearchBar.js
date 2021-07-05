import React from 'react';
import "./SearchBar.css"

function SearchBar({placeholder,key}) {
    return (
        <div className="search">
            <div className="inputSearch">
                <input type="text" placeholder={placeholder} key={key}/>
            </div>
            <div className="dataResult"></div>
        </div>
    )
}

export default SearchBar
