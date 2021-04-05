import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Notification from './components/Notification';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import phonebookService from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    phonebookService.getAll().then((initialContacts) => {
      setPersons(initialContacts);
    });
  }, []);

  const newEntry = (e) => {
    e.preventDefault();
    const contactList = {
      name: newName,
      number: newNumber,
    };

    const nameMatch = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (nameMatch) {
      const updateNumber = {
        ...nameMatch,
        number: newNumber,
        id: nameMatch.id,
      };
      if (
        window.confirm(
          `${nameMatch.name} is already added to the phonebook, replace old number with a new one?`
        )
      ) {
        phonebookService
          .update(nameMatch.id, updateNumber)
          .then((updatedNumber) => {
            setPersons(
              persons.filter((person) =>
                person.id !== updatedNumber.id ? person : updatedNumber
              )
            );
            setNotification({
              alert: `Number updated for ${newName}`,
              status: `success`,
            });
            setTimeout(() => {
              setNotification(null);
            }, 5000);
          })
          .catch((error) => {
            setNotification({
              alert: `Information for ${newName} has already been removed from the server`,
              status: `error`,
            });
          });
      }
    } else {
      phonebookService.create(contactList).then((returnedNumber) => {
        setPersons(persons.concat(contactList));
        setNotification({
          alert: `${newName} has been added`,
          status: `success`,
        });
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      });
    }
    setNewName('');
    setNewNumber('');
  };

  //handles
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

  const displayInfo =
    handleFilter === ''
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete this contact? `)) {
      phonebookService
        .deleteInput(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          setNotification({
            alert: `Information was already removed from the server`,
            status: `error`,
          });
        });
    }
    setNotification({
      alert: `Contact has been deleted`,
      status: `success`,
    });
    setTimeout(() => {
      setNotification(null);
    }, 5000);

    setPersons(persons.filter((person) => person.id !== id));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
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
      {displayInfo.map((person) => (
        <Persons key={person.id} person={person} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default App;
