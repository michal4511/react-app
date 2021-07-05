import React, {useState} from 'react';
import "./SearchBar.css"

function SearchBar({placeholder,data}) {

    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWorld = event.target.value;
        const newFilter = data.filter((value) => {
            return value.full_name.toLowerCase().includes(searchWorld.toLowerCase());
        });
        setFilteredData(newFilter);
    }

    return (
        <div className="search">
            <div className="inputSearch">
                <input type="text" placeholder={placeholder} onChange={handleFilter}/>
            </div>
            { 
            filteredData.length !== 0 && (
                <div className="dataResult">
                    {filteredData.map((value, key) => {
                        return (
                            <a className="dataItem" href="#" key={key} target="_blank" rel="noreferrer">
                                <p>{value.full_name}</p>
                            </a>
                        );
                    })}
                </div>
            )
            }
        </div>
    )
}

export default SearchBar
