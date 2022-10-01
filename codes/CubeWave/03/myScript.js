let angle = 0;
let w = 24;
let ma;

function setup() {
    createCanvas( 400, 400, WEBGL );
	ma = atan( 1 / sqrt ( 2 ) );
}

function draw() {
    //background(0);
	background(175);
	//ortho();
	ortho( -300, 300, 300, -300, 0, 1000 );
	ambientLight( 255, 255, 255, 0, -1, 0 );
	translate( 0, 50, -50 );
	//rotateX( PI / 4 );
	rotateX( -QUARTER_PI );
	rotateY( ma );
	//translate( width / 2, height / 2 );
	rectMode( CENTER );
	//rotateX( angle * 0.25 );
	
	let offset = 0;
	//for ( let y = 0; y < height; y += w )
    for ( let z = 0; z < height; z += w )
	{
		for ( let x = 0; x < width; x += w )
  	    {
		    push();
		    let a = angle + offset;
	        let h = map( sin( a ), -1, 1, 0, 100 );
			//let h = w;
	        //fill( 255 );
		    //translate( x - width / 2, y - height / 2, 0 );
			translate( x - width / 2, 0, z - height / 2 );
			normalMaterial();
		    //box( w );
		    box( w - 2, h, w - 2 );
	        //rect( x - width / 2 + w / 2, 0, w - 2, h );
		    pop();
		}
		offset += 0.1;		
	}
	angle += 0.1;

}
