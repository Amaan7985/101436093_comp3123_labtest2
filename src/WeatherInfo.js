import React from 'react';

function WeatherInfo({ data }) {
  return (
    <div className="weather-info">
      <h2>Weather in {data.name}, {data.sys.country}</h2>
      <div className="temp">
        <h3>{data.main.temp}°C</h3>
        <img 
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
          alt="weather-icon"
        />
      </div>
      <p>{data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherInfo;
