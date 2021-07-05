import React from 'react'
import SearchBar from './SearchBar';
import CustomerData from '../MOCK_DATA.json';

function Home() {
    return (
        <div className="home">
            <h1>Search Customers</h1>
            <SearchBar placeholder="Enter a Customer Name..." data={CustomerData}/>
        </div>
    )
}

export default Home
