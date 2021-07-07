import React, {useState} from 'react';

// style
import "./SearchBar.css";

// icons
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

function SearchBar({placeholder,data}) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [userName, setUserName] = useState("");
    const [userAddress, setUserAddress] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");

    const handleFilter = (event) => {
        const searchWorld = event.target.value;
        setWordEntered(searchWorld);
        const newFilter = data.filter((value) => {
            return value.full_name.toLowerCase().includes(searchWorld.toLowerCase());
        });

        //empty input doesn't show daraResult div
        searchWorld === "" ? setFilteredData([]) : setFilteredData(newFilter);
    }

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
        setUserName("")
    } 

    const handleClick = (value) => {
        setUserName(value.full_name);
        setUserAddress(value.address)
        setUserEmail(value.email);
        setUserPhone(value.phone)
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
                            <button className="linkDataItem" to="/" key={key} target="_blank" rel="noreferrer" email={value.email} onClick={(e) => handleClick(value)}>
                                <p>{value.full_name}</p> 
                            </button>
                        );
                    })}
                </div>
            )
            }
            {
            userName.length !== 0 && (
                <div className="furtherInfo">
                    <p><PersonIcon/>{userName}</p>
                    <p><HomeIcon/>{userAddress}</p>
                    <p><EmailIcon/>{userEmail}</p>
                    <p><PhoneIcon/>{userPhone}</p>
                </div>
            )
            }
            
        </div>
    )
}

export default SearchBar