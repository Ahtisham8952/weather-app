
import React from 'react';

const WeatherDisplay = ({ weatherData, loading, error }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="weather-display">
      {weatherData && (
        <>
          <h3>{weatherData.name}</h3>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Condition: {weatherData.weather[0].description}</p>
        </>
      )}
    </div>
  );
};

export default WeatherDisplay;
