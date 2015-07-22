function Rect(x, y, width, height, color) {
    var MOVEMENT_INCREMENT = 5;

    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 50;
    this.height = height || 50;
    this.color = color || '#000';

    this.draw = function draw(canvasContext) {
        canvasContext.fillStyle = this.color;
        canvasContext.fillRect(this.x, this.y, this.width, this.height);
    };

    this.keydownHandler = function keydownHandler(event) {
        switch (event.keyCode) {
            case 37: // Left
                this.x -= MOVEMENT_INCREMENT;
                break;
            case 38: // Up
                this.y -= MOVEMENT_INCREMENT;
                break;
            case 39: // Right
                this.x += MOVEMENT_INCREMENT;
                break;
            case 40: // Down
                this.y += MOVEMENT_INCREMENT;
                break;
        }
    };
}

(function() {
    var FPS = 60;

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var drawables = [
        new Rect(0, 0, 50, 50, '#ff0000'),
        new Rect(canvas.width - 50, canvas.height - 50, 50, 50, '#0000ff')
    ];

    drawables.forEach(function(drawable) {
        window.addEventListener('keydown', drawable.keydownHandler.bind(drawable));
    });

    setInterval(function() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        drawables.forEach(function(drawable) {
            drawable.draw(context);
        });
    }, 1000 / FPS);
})();