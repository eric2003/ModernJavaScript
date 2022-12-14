let angle = 0;
let w = 24;
function make2Darray(cols, rows) {
    let arr = new Array( cols );
    for ( let i = 0; i < arr.length; i ++ ) {
        arr[i] = new Array( rows );
    }
    return arr;
}

function setup() {
    createCanvas( 400, 400 );
}

function draw() {
    background(0);
	translate( width / 2, height / 2 );
	rectMode( CENTER );
	let offset = 0;
	for ( let x = 0; x < width; x += w ) {
		let a = angle + offset;
	    let h = map( sin( a ), -1, 1, 0, 100 );
	    fill( 255 );
	    rect( x - width / 2 + w / 2, 0, w - 2, h );
		offset += 0.1;
	}
	angle += 0.1;

}
