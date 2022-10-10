let x = 100;
let circle_speed = 3;

function setup() {
    createCanvas( 600, 400 );
}

function draw() {
    background( 0 );
	stroke( 255 );
	strokeWeight( 4 );
	noFill();
	ellipse( x, 200, 100, 100 );
	if ( x > width ) {
		circle_speed = -3;
		//print( "OFF THE SCREEN!" );
	}
	else if ( x < 0 )
	{
		circle_speed = 3;
	}
	
	x += circle_speed;
}
