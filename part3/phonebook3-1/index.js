const express = require('express');
const app = express();

app.use(express.json());

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: 12 - 43 - 234345,
  },
  {
    id: 4,
    name: 'Mary Poppendick',
    number: '39-23-6423122',
  },
];

const generateId = () => {
  return Math.floor(Math.random() * 1000);
};

app.post('/api/persons', (request, response) => {
  const body = request.body;
  const nameDB = persons.find((person) => person.name === body.name);
  console.log(body.name);

  if (!body.name || !body.number) {
    return response.status(400).json({ error: 'info missing' });
  }

  if (nameDB) {
    return response.status(400).json({ error: 'name must be unique' });
  }

  const person = [
    {
      id: generateId(),
      name: body.name,
      number: body.number,
    },
  ];

  notes = persons.concat(person);

  response.json(person);
});

app.get('/api/persons', (request, response) => {
  response.json(persons);
});

app.get('/info', (request, response) => {
  response.send(`<p>PhoneBook has info for ${persons.length} people</p>
  ${new Date()}`);
});

app.get('/api/persons/:id', (request, response) => {
  const id = +request.params.id;
  const person = persons.find((person) => person.id === id);
  person ? response.json(person) : response.status(404).end();
});

app.delete('/api/persons/:id', (request, response) => {
  const id = +request.params.id;
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
