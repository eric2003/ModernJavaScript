let angle = 0;

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
	//let h = 100;
	let h = map( sin( angle ), -1, 1, 0, 100 );
	fill( 255 );
	rect( 0, 0, 10, h );
	angle += 0.1;

}
