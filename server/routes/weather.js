const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).json({ error: 'City is required' });
    }

    try {
        const apiKey = process.env.WEATHER_API_KEY; 
        const response = await axios.get(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
        );

        const data = response.data;
        const weatherInfo = {
            city: data.location.name,
            temperature: data.current.temp_c, 
            condition: data.current.condition.text, 
            icon: data.current.condition.icon, 
            humidity: data.current.humidity, 
            windSpeed: data.current.wind_kph, 
        };

        res.json(weatherInfo);

    } catch (err) {
        console.error("Error fetching weather data:", err);
        res.status(500).json({ error: 'Error fetching weather data' });
    }
});

module.exports = router;
