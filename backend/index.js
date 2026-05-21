const express = require('express'),
  path = require('path'),
  cors = require('cors');

const app = express();
app.use(cors());
app.get('/api', (_request, response) => {
  response.send({ hello: 'World' });
});

app.use(express.static(path.join(path.resolve(), 'dist')));

app.listen(3000, () => {
  console.log('Redo på http://localhost:3000/');
});
