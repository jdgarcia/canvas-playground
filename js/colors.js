(function() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  var x = 0;
  var y = 0;
  var r = 0;
  var g = 0;
  var b = 0;

  var PIXEL_SIZE = 10;

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }

  while (x < canvas.width && y < canvas.height) {
    r = getRandomInt(0, 255);
    g = getRandomInt(0, 255);
    b = getRandomInt(0, 255);

    context.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
    context.fillRect(x, y, PIXEL_SIZE, PIXEL_SIZE);

    x += PIXEL_SIZE;
    if (x >= canvas.width) {
      x = 0;
      y += PIXEL_SIZE;
    }
  }
})();
