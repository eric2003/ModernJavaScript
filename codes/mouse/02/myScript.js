let circleX = 100;

function setup() {
    createCanvas( 400, 300 );
}

function mousePressed() {
	circleX = 0;
}

function draw() {
    background(0);
	noStroke();
	circle(circleX, 150, 64);
	circleX += 1;
}
