import React from 'react';

function Persons({ person }) {
  return (
    <div>
      <p>
        {person.name} {person.number}
      </p>
    </div>
  );
}

export default Persons;