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
        canvasContext.strokeStyle = this.color;
        canvasContext.strokeRect(this.x, this.y, this.width, this.height);
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

function Triangle(point1, point2, point3, color) {
  this.p1 = point1;
  this.p2 = point2;
  this.p3 = point3;
  this.color = color;

  this.draw = function(canvasContext) {
    var path = new Path2D();
    path.moveTo(this.p1[0], this.p1[1]);
    path.lineTo(this.p2[0], this.p2[1]);
    path.lineTo(this.p3[0], this.p3[1]);

    canvasContext.fillStyle = this.color;
    canvasContext.fill(path);
  }
}
