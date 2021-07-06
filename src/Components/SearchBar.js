import React, {useState} from 'react';
import "./SearchBar.css";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { FilterDrama } from '@material-ui/icons';

function SearchBar({placeholder,data}) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    
    const handleFilter = (event) => {
        const searchWorld = event.target.value;
        setWordEntered(searchWorld);
        const newFilter = data.filter((value) => {
            return value.full_name.toLowerCase().includes(searchWorld.toLowerCase());
        });

        //empty input doesn't show daraResuls div
        {searchWorld === "" ? setFilteredData([]) : setFilteredData(newFilter)};

        //alternative:
        // if (searchWorld === "") {
        //     setFilteredData([])
        // } else {
        //     setFilteredData(newFilter);
        // }
    }

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    } 

    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
                <div className="searchIcon">
                    {filteredData.length === 0 ? <SearchIcon/> : <CloseIcon id="clearBtn" onClick={clearInput}/>}
                </div>
            </div>
            { 
            filteredData.length !== 0 && (
                <div className="dataResult">
                    {filteredData.map((value, key) => {
                        return (
                            <a className="linkDataItem" href="#" key={key} target="_blank" rel="noreferrer">
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