import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Weather from './Weather';

const weatherUrl = (city) =>
  `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${city}`;

function CountryFormat({ country, showDefault }) {
  const [weather, setWeather] = useState({});
  const [show, setShow] = useState(showDefault);

  useEffect(() => {
    axios.get(weatherUrl(country.capital)).then((response) => {
      //check if the API limits the number of simultaneous countries/renders 
        if (response.data.current !== undefined) {
        console.log(3, response, country);
        const { current } = response.data;
        const currentWeather = {
          temperature: current.temperature,
          icon: current.weather_icons[0],
          windspeed: current.speed,
          winDir: current.wind_dir,
        };
        console.log(1, current, currentWeather);
        setWeather(currentWeather);
      }
    });
  }, [country]);

  console.log(weather);

  const content = (
    <section>
      <h4>Capital: {country.capital}</h4>
      <h4>Population: {country.population}</h4>
      <h2>Spoken Languages</h2>
      <ul>
        {country.languages.map((c) => (
          <li key={c.name}>{c.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt={`${country.name}`} height='100' />
      <Weather weather={weather} country={country} />
    </section>
  );

  return (
    <div>
      <section>
        <h1>
          {country.name}
          <button onClick={() => setShow(!show)}>
            {show ? 'hide' : 'show'}
          </button>
        </h1>
      </section>
      {show ? content : null}
    </div>
  );
}

export default CountryFormat;
