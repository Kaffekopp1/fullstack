const express = require('express'),
  path = require('path'),
  cors = require('cors');

const dotenv = require('dotenv'),
  { Client } = require('pg');

dotenv.config();

const client = new Client({
  connectionString: process.env.PGURI
});

client.connect();

const app = express();
app.use(cors());

app.get('/api', (_request, response) => {
  response.send({ hello: 'World' });
});

app.get('/api/cities', async (_request, response) => {
  console.log('get');
  const { rows } = await client.query('SELECT * FROM cities');

  response.send(rows);
});

app.use(express.static(path.join(path.resolve(), 'dist')));

app.listen(3000, () => {
  console.log('Redo på http://localhost:3000/');
});
