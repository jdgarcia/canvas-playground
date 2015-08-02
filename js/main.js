(function() {
    var FPS = 60;

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var drawables = [
        new Triangle([0, 0], [50, 0], [0, 50], '#00ff00'),
        new Rect(0, 0, 50, 50, '#ff0000', MovementKeys.ASDW),
        new Rect(canvas.width - 50, canvas.height - 50, 50, 50, '#0000ff', MovementKeys.ARROWS)
    ];

    // setup listeners for keeping track of pressed keys
    window.addEventListener('keydown', function(event) {
        PressedKeyMap[event.keyCode] = true;
    });
    window.addEventListener('keyup', function(event) {
        PressedKeyMap[event.keyCode] = false;
    });

    // setup each drawable's key listener
    drawables.forEach(function(drawable) {
        if (drawable.keydownHandler) {
          window.addEventListener('keydown', drawable.keydownHandler.bind(drawable));
        }
    });

    // main game loop
    setInterval(function() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        drawables.forEach(function(drawable) {
            drawable.draw(context);
        });
    }, 1000 / FPS);
})();
