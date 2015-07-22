var KeyCodes = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,

    A: 65,
    D: 68,
    S: 83,
    W: 87
}

var PressedKeyMap = {};

var MovementKeys = {
    ARROWS: {
        UP: KeyCodes.UP,
        DOWN: KeyCodes.DOWN,
        LEFT: KeyCodes.LEFT,
        RIGHT: KeyCodes.RIGHT
    },

    ASDW: {
        UP: KeyCodes.W,
        DOWN: KeyCodes.S,
        LEFT: KeyCodes.A,
        RIGHT: KeyCodes.D
    }
};

function Rect(x, y, width, height, color, movementKeys) {
    var MOVEMENT_INCREMENT = 5;

    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 50;
    this.height = height || 50;
    this.color = color || '#000';
    this.movementKeys = movementKeys;

    this.draw = function draw(canvasContext) {
        canvasContext.fillStyle = this.color;
        canvasContext.fillRect(this.x, this.y, this.width, this.height);
    };

    this.keydownHandler = function keydownHandler(event) {
        if (PressedKeyMap[this.movementKeys.UP]) {
            this.y -= MOVEMENT_INCREMENT;
        }
        if (PressedKeyMap[this.movementKeys.DOWN]) {
            this.y += MOVEMENT_INCREMENT;
        }
        if (PressedKeyMap[this.movementKeys.LEFT]) {
            this.x -= MOVEMENT_INCREMENT;
        }
        if (PressedKeyMap[this.movementKeys.RIGHT]) {
            this.x += MOVEMENT_INCREMENT;
        }
    };
}

(function() {
    var FPS = 60;

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var drawables = [
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
        window.addEventListener('keydown', drawable.keydownHandler.bind(drawable));
    });

    // main game loop
    setInterval(function() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        drawables.forEach(function(drawable) {
            drawable.draw(context);
        });
    }, 1000 / FPS);
})();