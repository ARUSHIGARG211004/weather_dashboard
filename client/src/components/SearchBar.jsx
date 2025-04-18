import React, { useState } from 'react';
const SearchBar=({fetchWeatherData})=>{
    const [city, setCity] = useState('');
    
    const handleSearch=()=>{
        if(city.trim()){
            fetchWeatherData(city);
            
        }
    };
    return(
        <div className= "search-bar">
            <input
                type="text"
                value={city}
                onChange={(e)=>setCity(e.target.value)}
                placeholder="Enter city name" 
                />
                <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
