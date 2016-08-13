console.log('hi');
var angle = 0.0;
var speed = 0.05;

function setup(){
	createCanvas(windowWidth, windowHeight);
	fill(0);
	strokeWeight(15);
}

function draw(){
	var arm = map(mouseX, 0, width, 10, 300);
	background(255);

	translate(width/2, height/2);
	rotate(angle);
	line(0, 0, 0, arm);

	angle += speed;
}