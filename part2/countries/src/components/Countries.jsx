import React from 'react';
import CountryCard from './CountryCard';

const Countries = ({ searchFilter }) => {
  if (searchFilter.length > 10) {
    return <p>Too many records</p>;
  } else {
    return searchFilter.map((country) => (
      <CountryCard
        searchFilter={searchFilter}
        key={country.alpha3Code}
        country={country}
      />
    ));
  }
};

export default Countries;
