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
            <h1>Search Customers</h1>
            <SearchParams setSelectedCar={setSelectedCar} />
            <SearchBar selectedCar={selectedCar} placeholder="Enter a Customer Name..." data={CustomerData}/>
        </div>
    )
}

export default Home
