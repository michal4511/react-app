import React from 'react';
import "./SearchBar.css"

function SearchBar({placeholder,data}) {
    return (
        <div className="search">
            <div className="inputSearch">
                <input type="text" placeholder={placeholder}/>
            </div>
            <div className="dataResult">
                {data.map((value, key) => {
                    return (
                        <a className="dataItem" href="#" key={key} target="_blank" rel="noreferrer">
                            <p>{value.full_name}</p>
                        </a>
                    );
                })}
            </div>
        </div>
    )
}

export default SearchBar
