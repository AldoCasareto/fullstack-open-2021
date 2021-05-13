import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState('');
  console.log('capital:', capital);
  const API_kEY = process.env.REACT_APP_API_KEY;

  const weatherUrl = `http://api.weatherstack.com/current?access_key=${API_kEY}&query=${capital}`;
  console.log('weather', weatherUrl);
  useEffect(() => {
    axios.get(weatherUrl).then((res) => {
      const { current } = res.data;
      console.log(res.data);
      const currentWeather = {
        temperature: current.temperature,
        icon: current.weather_icons[0],
        windspeed: current.wind_speed,
        winDir: current.wind_dir,
      };
      console.log(currentWeather);

      setWeather(currentWeather);
    });
  }, [capital]);

  return (
    <>
      {weather ? (
        <div>
          <h2>Weather in {capital}</h2>
          <p>Temperature: {weather.temperature} in celcius</p>
          <img src={weather.icon} alt='icon' />
          <p>
            <strong>Wind: </strong>
            {weather.windspeed} mph - direction {weather.winDir}
          </p>
        </div>
      ) : (
        <p>Fetching weather...</p>
      )}
    </>
  );
};

export default Weather;
