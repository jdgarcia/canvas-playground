function clearCanvas(canvasContext) {
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);
}

function Rect(canvasContext, x, y, width, height) {
	var MOVEMENT_INCREMENT = 5;

	this.canvasContext = canvasContext;
	this.x = x || 0;
	this.y = y || 0;
	this.width = width || 50;
	this.height = height || 50;

	this.draw = function draw() {
		this.canvasContext.fillRect(this.x, this.y, this.width, this.height);
	};

	this.keydownHandler = function keydownHandler(event) {
		clearCanvas(this.canvasContext);
		console.log(event.keyCode);

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
		}

		this.draw();
	};
}

(function() {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	context.fillStyle = 'rgb(200, 0, 0';
	
	var rect = new Rect(context);
	rect.draw();

	window.addEventListener('keydown', rect.keydownHandler.bind(rect));
})();