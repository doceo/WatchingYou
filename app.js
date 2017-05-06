var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cameraHandler = require('./cameraHandler.js');

app.use(express.static('styles'));

var SERVER_PORT = 3000;

// numero di client collegati
var clients = 0;

// sensori
var speed = 100;

server.listen(SERVER_PORT);
console.log('server listening on port ' + SERVER_PORT);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  clients++;
  if (clients == 1) {
    var tID = cameraHandler.startCamera(io);
  }
  console.log('stabilita nuova connessione');
  console.log('client collegati: ', clients);

  socket.on('disconnect', function () {
    clients--;
    if (clients <= 0) cameraHandler.stopCamera(tID);
    console.log('connessione chiusa');
    console.log('client collegati: ', clients);
  });
});

// gira anche in assenza di client
// potrebbe essere utile per memorizzare info in db
setInterval( function () {
  speed = Math.floor(Math.random() * 300 + 50);
  io.emit('speed', { value: speed });
  //console.log(speed);
}, 1000);
