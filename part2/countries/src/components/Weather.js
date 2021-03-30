import React from 'react';

const Weather = ({ weather, country }) => {
  console.log(weather);
  return (
    <div>
      <h2>Weather in {country.capital}</h2>
      <p>
        <strong>temperature: </strong>
        {weather.temperature} Celcius
      </p>
      <img src={weather.icon} alt='icon' />
      <p>
        <strong>Wind:</strong>
        {weather.windspeed} - direction {weather.winDir}{' '}
      </p>
    </div>
  );
};

export default Weather;
