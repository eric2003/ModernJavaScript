let blockImg;
let block1;
let block2;
let clack;

function preload() {
    blockImg = loadImage( 'block.png' );
    clack = loadSound( 'clack.wav' );
}

function setup() {
    createCanvas( windowWidth, 200 );
    block1 = new Block( 100, 20 , 1, 0  );
    block2 = new Block( 200, 150, 100, -5 );
}

function draw() {
    background( 200 );
    if ( block1.collide( block2 ) ) {
		const v1 = block1.bounce( block2 );
		const v2 = block2.bounce( block1 );
		block1.v = v1;
		block2.v = v2;
	}
    block1.update();
    block2.update();
    block1.show();
    block2.show();
}
