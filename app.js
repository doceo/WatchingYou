var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cv = require('opencv');

var SERVER_PORT = 3000;

var FRAME_DELAY = 40;  // msec
var JPEG_QUALITY = 70;

// numero di client collegati
var clients = 0;

var tID;

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
  console.log('stabilita nuova connessione');
  console.log('client collegati: ', clients);
  if (clients == 1) startCamera();

  socket.on('disconnect', function () {
    clients--;
    if (clients <= 0) stopCamera();
    console.log('connessione chiusa');
    console.log('client collegati: ', clients);
  });
});

function startCamera() {
  tID = setInterval(function() {
    camera.read(function(err, im) {
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
