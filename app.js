var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

server.listen(3000);

app.get('/', function(req, res) {
  res.sendFile(__dirname+'/index.html');
});

io.on('connection', function(socket) {
  console.log('user connected');

  fs.watch(__dirname+'/pictures/image.jpg', function(evt, filename) {
    console.log('rilevata variazione immagine');

    fs.readFile(__dirname+'/pictures/image.jpg', function(err, buf) {
      socket.emit('update_image', {image: true, buffer: buf.toString('base64')});
    });
  });
});

console.log('server listening on port 3000');
