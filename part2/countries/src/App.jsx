import axios from 'axios';
import React, { useState, useEffect } from 'react';

import './App.css';
import Countries from './components/Countries';
import Filter from './components/Filter';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  const url = 'https://restcountries.eu/rest/v2/all';

  useEffect(() => {
    axios.get(url).then((res) => {
      const fetchedCountries = res.data;
      setCountries(fetchedCountries);
    });
  }, []);

  const searchFilter = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  // const displayCountries = search ? [] : searchFilter;

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  // const displayCountries = search === '' ? [] : searchFilter;

  return (
    <main>
      <h1>Show Countries</h1>
      <Filter handleSearch={handleSearch} />
      <Countries searchFilter={searchFilter} setCountry={setCountries} />
    </main>
  );
};

export default App;
