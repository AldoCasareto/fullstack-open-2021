import React from 'react';
import CountryFormat from './CountryFormat';

const CountryList = ({ countries }) => {
  const countryList = () =>
    countries.map((country) => (
      <CountryFormat key={country.alpha2Code} showDefault={false} country={country} />
    ));
  if (countries.length === 1) return <CountryFormat showDefault={true}  country={countries[0]} />;
  if (countries.length < 10) return <div>{countryList()}</div>;
  if (countries.length > 10)
    return <p>Too many matches, specify another filter</p>;
  console.log(countryList);
};

export default CountryList;
