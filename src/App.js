import React, { useState } from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = '4162d9acb27e65c1f53dbe45146f281c'; 

  const getWeather = () => {
    if (city !== '') {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => {
          setWeatherData(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the weather data!", error);
        });
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="OpenWeather Logo" className="logo" />
      </header>
      <h1>Weather App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Get Weather</button>
      </div>
      {weatherData && <WeatherInfo data={weatherData} />}
    </div>
  );
}

export default App;
