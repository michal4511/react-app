import React, {useState} from 'react';

// style
import './SearchParams.css';

const Cars = ["Audi", "Ford", "Nissan", "Porsche"];

function SearchParams() {

    const [car, setCar] = useState("");

    return (
        <div className="searchParameter">
            <label htmlFor="car">
                Car
                <select 
                    id="car"
                    value={car}
                    onChange={(e) => setCar(e.target.value)}
                    onBlur={(e) => setCar(e.target.value)}
                >
                    <option/>
                    {Cars.map(car => (
                        <option value={car} key={car}>
                            {car}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    )
    console.log(car)
}

export default SearchParams
