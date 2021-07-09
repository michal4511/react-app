import React, {useState} from 'react';

// style
import './SearchParams.css';

const Cars = ["Audi", "Ford", "Nissan", "Porsche"];

function SearchParams(props) {

    const [car, setCar] = useState("");

    const handleClick = (e) => {
        setCar(e.target.value);
        props.changeCar(car);
    }

    return (
        <div className="searchParameter">
            <label htmlFor="car">
                Car
                <select 
                    id="car"
                    value={car}
                    onChange={(e) => handleClick(e)}
                    onBlur={(e) => handleClick(e)}
                >
                    <option/>
                    {Cars.map(car => (
                        <option value={car} key={car}>
                            {car}
                        </option>
                    ))}
                </select>
            </label>
            {/* <button onClick={() => props.changeCar(car)}
            >Ahoj</button> */}
        </div>
    )
}

export default SearchParams
