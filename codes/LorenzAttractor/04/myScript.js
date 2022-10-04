let x = 0.01;
let y = 0;
let z = 0;

let a = 10;
let b = 28;
let c = 8.0 / 3.0;

let points = new Array();
let point_color_r = 0;
let clist = new Array();

function setup() {
    createCanvas(800, 600, WEBGL);
    colorMode(HSB);
}

function draw() {
    background( 0 );
    
    let dt = 0.01;
    let dx = a * (y - x) * dt;
    let dy = (x * (b - z) - y) * dt;
    let dz = (x * y - c * z) * dt;
    x = x + dx;
    y = y + dy;
    z = z + dz;

    points.push( new p5.Vector(x, y, z) );
    point_color_r += 1;
    if ( point_color_r > 255 )
	{
       point_color_r = 0;
    }
	clist.push( point_color_r );
    
    translate( 0, 0, -80 );
    let camX = map( mouseX, 0, width , -200, 200 );
    let camY = map( mouseY, 0, height, -200, 200 );
    camera( camX, camY, height / 2.0 / tan((PI * 30.0) / 180.0), 0, 0, 0, 0, 1, 0 );

    scale( 5 );
    strokeWeight(3)	
    noFill();
    for ( let i = 0; i < points.length - 1; i ++ ) {  
        let v0 = points[ i ];
		let v1 = points[ i + 1 ];
		let cr = clist[ i ];
		stroke( cr, 255, 255 )
		line( v0.x, v0.y, v0.z, v1.x, v1.y, v1.z );
		//console.log( i, clist[i] );
    }    

}
