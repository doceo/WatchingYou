var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

server.listen(3000);

// usa express per gestire il routing
//
// quando il client richiede (con metodo GET) il
// percorso '/', invia il file index.html
app.get('/', function(req, res) {
  res.sendFile(__dirname+'/index.html');
});

// usa socket.io per registrare le azioni da compiere
// quando si verificano certi eventi.
//
// Gestisce l'evento 'connection'
io.on('connection', function(socket) {
  // all'avvio di una connessione viene creato un socket!

  console.log('user connected');

  // a connessione avvenuta,
  // usa il modulo fs per monitorare il file image.jpg
  fs.watch(__dirname+'/pictures/image.jpg', function(evt, filename) {
    console.log('rilevata variazione immagine');

    // in caso di variazione del file image.jpg lo reinvia
    // al client tramite il socket precedentemente creato
    fs.readFile(__dirname+'/pictures/image.jpg', function(err, buf) {
      socket.emit('update_image', {image: true, buffer: buf.toString('base64')});
    });
  });
});

console.log('server listening on port 3000');
