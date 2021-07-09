import React, {useState} from 'react'

//data
import CustomerData from '../MOCK_DATA.json';

// child
import SearchParams from './SearchParams';
import SearchBar from './SearchBar';

// style
import "./Home.css"

function Home() {

    const [selectedCar, setSelectedCar] = useState("");

    return (
        <div className="home">
            <h1>Search Customers {selectedCar}</h1>
            <SearchParams changeCar={selectedCar => setSelectedCar(selectedCar)}/>
            <SearchBar parameter={selectedCar} placeholder="Enter a Customer Name..." data={CustomerData}/>
        </div>
    )
}

export default Home
