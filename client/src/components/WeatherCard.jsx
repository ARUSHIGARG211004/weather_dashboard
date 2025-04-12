// src/components/WeatherCard.jsx
import React from 'react';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <div className="weather-card">
      <h2>Weather in {weatherData.city}</h2>
      <img src={weatherData.icon} alt={weatherData.condition} />
      <p><strong>Temperature:</strong> {weatherData.temperature}°C</p>
      <p><strong>Condition:</strong> {weatherData.condition}</p>
      <p><strong>Humidity:</strong> {weatherData.humidity}%</p>
      <p><strong>Wind Speed:</strong> {weatherData.windSpeed} m/s</p>
    </div>
  );
};

export default WeatherCard;
