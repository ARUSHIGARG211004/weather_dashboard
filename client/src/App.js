import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false); // ✅ Added darkMode state

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
      console.log("weather data", response.data);
      setWeatherData(response.data);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError('Error fetching weather data');
    } finally {
      setLoading(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.setAttribute('data-theme', darkMode ? 'light' : 'dark');
  };

  // Optional: set initial theme on first load
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="App">
      <h1>Real-Time Weather Dashboard</h1>
      
      <button className="dark-toggle" onClick={toggleDarkMode}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <SearchBar fetchWeatherData={fetchWeatherData} />

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;
