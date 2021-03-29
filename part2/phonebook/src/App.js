import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const searchFilter = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    axios.get('http://localhost:3002/persons').then((response) => {
      setPersons(response.data);
    });
  }, []);

  const newEntry = (e) => {
    e.preventDefault();

    const contactList = {
      name: newName,
      number: newNumber,
      id: newName,
    };

    const nameMatch = persons.find((person) => person.name === newName);

    nameMatch
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(contactList));
    setNewName('');
    setNewNumber('');
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} filter={filter} />

      <h3>Add a new </h3>
      <PersonForm
        handleNameChange={handleNameChange}
        handleChangeNumber={handleChangeNumber}
        newEntry={newEntry}
        newName={newName}
        newNumber={newNumber}
      />
      <h3>Numbers</h3>
      {searchFilter.map((person) => (
        <Persons key={person.id} person={person} />
      ))}
    </div>
  );
};

export default App;
