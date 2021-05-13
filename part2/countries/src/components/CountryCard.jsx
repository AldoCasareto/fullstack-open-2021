import React, { useState } from 'react';
import Weather from './Weather';

const CountryCard = ({ country, searchFilter }) => {
  const [show, setShow] = useState(false);

  console.log(country);
  console.log(searchFilter);
  const { name, languages, capital, population, flag } = country;

  const countryInfo = (
    <>
      <h1>{name}</h1>
      <p>capital {capital} </p>
      <p>population {population}</p>
      <h3>Languages:</h3>
      <ul>
        {languages.map((l) => (
          <li key={l.name}> {l.name}</li>
        ))}
      </ul>
      <img src={flag} alt={name} width='100' />
      <Weather capital={capital} />
    </>
  );

  return (
    <>
      {console.log(searchFilter.length)}
      {searchFilter.length === 1 ? (
        countryInfo
      ) : (
        <div>
          {name}
          <button onClick={() => setShow(!show)}>
            {show ? 'Hide' : 'Show'}
          </button>
        </div>
      )}
      {show ? countryInfo : null}
    </>
  );
};

export default CountryCard;
