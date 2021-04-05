import React from 'react';

function Persons({ person, handleDelete }) {
  return (
    <div>
      <p>
        {person.name} {person.number}
        <button onClick={() => handleDelete(person.id)}>Delete</button>
      </p>
    </div>
  );
}

export default Persons;
