let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
canvas.focus();

let x = 50;
let y = 50;
const size = 50;

function drawRect(x, y){
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	ctx.beginPath();
	ctx.fillStyle = 'black';
	ctx.rect(x, y, 100, 100);
	ctx.fill();
}

canvas.onkeydown = function(event){
	switch (event.code){
		case 'KeyW':
			y-=50;
			drawRect(x, y);
			break;
		case 'KeyA':
			x-=50;
			drawRect(x, y);
			break;
		case 'KeyS':
			y+=50;
			drawRect(x, y);
			break;
		case 'KeyD':
			x+=50;
			drawRect(x, y);
			break;
		default:
			break;
	}
}