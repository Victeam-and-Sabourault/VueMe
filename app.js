const express = require('express');
const http = require('http');

let app = express();
const server = http.createServer(app);

/* Serve static files */
app.use('/static', express.static('dist/static'));
app.get('/', (req, res) => {
  res.sendFile( __dirname + '/dist/index.html');
});

server.listen(1337, () => console.log('Magic happens on port 1337'));
