(function() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }

  function getModifiedValue(value) {
    var newValue;

    if (value === 0) {
      newValue = 1;
    } else if (value === 255) {
      newValue = 254;
    } else {
      newValue = Math.random() < 0.5 ? value + 1 : value - 1;
    }

    return newValue % 256;
  }

  var x = 0;
  var y = 0;
  var r = getRandomInt(0, 255);
  var g = getRandomInt(0, 255);
  var b = getRandomInt(0, 255);

  var PIXEL_SIZE = 10;

  while (x < canvas.width && y < canvas.height) {
    console.log(x, y);
    r = getModifiedValue(r);
    g = getModifiedValue(g);
    b = getModifiedValue(b);

    var color = 'rgb(' + r + ',' + g + ',' + b + ')';
    context.fillStyle = color;
    context.fillRect(x, y, PIXEL_SIZE, PIXEL_SIZE);

    x += PIXEL_SIZE;
    if (x >= canvas.width) {
      x = 0;
      y += PIXEL_SIZE;
    }
  }
})();
