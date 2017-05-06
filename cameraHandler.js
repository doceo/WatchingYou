var cv = require('opencv');

var FRAME_DELAY = 70;  // msec
var JPEG_QUALITY = 70;

try {
  var camera = new cv.VideoCapture(0);
  console.log('inizializzazione camera ... tutto ok');
} catch (e) {
  console.log("Couldn't start camera: ", e);
  process.exit(1);
}

exports.startCamera = function (io) {
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

  return tID;
}

exports.stopCamera = function (tID) {
  clearInterval(tID);
}
