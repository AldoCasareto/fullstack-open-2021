import React from 'react';

function PersonForm({
  handleNameChange,
  handleChangeNumber,
  newEntry,
  newName,
  newNumber,
}) {
  return (
    <form onSubmit={newEntry}>
      <div>
        name:
        <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number:
        <input value={newNumber} onChange={handleChangeNumber} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
}

export default PersonForm;
