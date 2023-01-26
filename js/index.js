
const express = require('express');
const app = express();
const http = require('http'),
  fs = require('fs'),
  url = require('url');
const morgan = require('morgan');
  

http.createServer((request, response) => {

  app.use(morgan('common'));
  app.use('/documentation.html', express.static('public'));

  app.get('/', (req, res) => {
  res.send('Welcome to my app!');
});

  app.get('/movies', (req, res) => {
  res.send('This is where you will find information regarding the movies.');
});

  let addr = request.url,
    q = url.parse(addr, true),
    filePath = '';

  fs.appendFile('log.txt', 'URL: ' + addr + '\nTimestamp: ' + new Date() + '\n\n', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Added to log.');
    }
  });

  if (q.pathname.includes('documentation')) {
    filePath = (__dirname + '/documentation.html');
  } else {
    filePath = 'index.html';
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw err;
    }

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(data);
    response.end();

  });

}).listen(8080);
console.log('My test server is running on Port 8080.');

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Uh Oh, something isn't where it is supposed to be, i'll go looking, please try later");
});



