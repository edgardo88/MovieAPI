const express = require('express');
const app = express();

let topMovies = [
  {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    director: 'J.K. Rowling'
  },
  {
    title: 'Lord of the Rings',
    director: 'J.R.R. Tolkien'
  },
  {
    title: 'Twilight',
    director: 'Stephanie Meyer'
  },
  {
    title: 'Encanto',
    director: 'Clark Spencer'
  },
  {
    title: 'Scarface',
    director: 'Martin Bregman'
  },
  {
    title: 'Titanic',
    director: 'James Cameron'
  },
  {
    title: 'Pearl Harbor',
    director: 'Michael Bay'
  },
  {
    title: 'Lord of the Rings-The Hobbit',
    director: 'J.R.R. Tolkien'
  },
  {
    title: 'Toy Story',
    director: 'Bonnie Arnold'
  },
  {
    title: 'Flubber',
    director: 'Joe Ross'
  },
];

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to my app!');
});

app.get('/documentation', express.static('public'));

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Uh Oh, something isn't where it is supposed to be, i'll go looking, please try later");
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
