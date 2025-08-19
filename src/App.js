import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!city) return;
    try {
      const key = process.env.REACT_APP_WEATHER_API_KEY;
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
      );
      setWeather(res.data);
    } catch (err) {
      alert('City not found!');
      setWeather(null);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial' }}>
      <h1>Weather Dashboard</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <button
        onClick={getWeather}
        style={{ padding: '8px 16px', marginLeft: '8px', fontSize: '16px', cursor: 'pointer' }}
      >
        Get Weather
      </button>

      {weather && (
        <div style={{ marginTop: '30px' }}>
          <h2>{weather.name}</h2>
          <p style={{ fontSize: '24px' }}>{weather.main.temp}°C</p>
          <p style={{ textTransform: 'capitalize', fontSize: '18px' }}>
            {weather.weather[0].description}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="icon"
          />
        </div>
      )}
    </div>
  );
}

export default App;

