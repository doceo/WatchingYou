var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cv = require('opencv');

app.use(express.static('styles'));

var SERVER_PORT = 3000;

var FRAME_DELAY = 70;  // msec
var JPEG_QUALITY = 70;

// numero di client collegati
var clients = 0;

var tID;

// sensori
var speed = 100;

try {
  var camera = new cv.VideoCapture(0);
} catch (e) {
  console.log("Couldn't start camera: ", e);
  process.exit(1);
}

server.listen(SERVER_PORT);
console.log('server listening on port ' + SERVER_PORT);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  clients++;
  if (clients == 1) startCamera();
  console.log('stabilita nuova connessione');
  console.log('client collegati: ', clients);

  socket.on('disconnect', function () {
    clients--;
    if (clients <= 0) stopCamera();
    console.log('connessione chiusa');
    console.log('client collegati: ', clients);
  });
});

function startCamera() {
  tID = setInterval(function () {
    camera.read(function (err, im) {
      if (err) throw err;

      //im.convertGrayscale();

      im.resize(320, 240);

      var s = im.toBuffer({
        ext: ".jpg",
        jpegQuality: JPEG_QUALITY,
      }).toString('base64');
      //console.log(s.length);

      // broadcast the frame
      io.emit('frame', { buffer: s });
    });
  }, FRAME_DELAY);
}

function stopCamera() {
  clearInterval(tID);
}

// gira anche in assenza di client
// potrebbe essere utile per memorizzare info in db
setInterval( function () {
  speed = Math.floor(Math.random() * 300 + 50);
  io.emit('speed', { value: speed });
  //console.log(speed);
}, 1000);
