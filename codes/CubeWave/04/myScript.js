let angle = 0;
let w = 24;
let ma;
let maxD;

function setup() {
    createCanvas( 400, 400, WEBGL );
    ma = atan( 1 / sqrt ( 2 ) );
    maxD = dist( 0, 0, 200, 200 ) ;
}

function draw() {
    background(175);
    ortho( -300, 300, -300, 300, 0, 1000 );
    ambientLight( 255, 255, 255, 0, -1, 0 );
    translate( 0, 50, -50 );
    rotateX( -QUARTER_PI );
    rotateY( ma );
    
    for ( let z = 0; z < height; z += w )
    {
        for ( let x = 0; x < width; x += w )
        {
            push();
            let d = dist( x, z, width / 2, height / 2 );
            let offset = map( d, 0, maxD, -PI, PI );
            let a = angle + offset;
            let h = floor( map( sin( a ), -1, 1, 100, 300 ) );
            translate( x - width / 2, 0, z - height / 2 );
            normalMaterial();
            box( w - 2, h, w - 2 );
            pop();
        }
    }
    angle -= 0.1;

}
