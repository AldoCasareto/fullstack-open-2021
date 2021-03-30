import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import CountryList from './components/CountryList'

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  const countryMatch =
    search === ''
      ? []
      : countries.filter((country) =>
          country.name.toLowerCase().includes(search.toLowerCase())
        );

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //   if (countryMatch.length === 1) {
  //     return (<div>{countryMatch[0]}</div>);
  //   } else (countryMatch.length > 10)
  //     return (<div>Too many matches, specify another filter</div>);
  // };


  return (
    <div className='App'>
      <h3>find countries</h3>
      <Search search={search} handleSearch={handleSearch} />
      <CountryList countries= {countryMatch}/>
    </div>
  );
}

export default App;
