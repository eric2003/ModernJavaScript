var x = 0.01
var y = 0
var z = 0
var sigma = 10
var prandtl = 28
var rayleigh = 8 / 3
var dt = 0.01
var positionPoint = []
var colorChange = 0;

function setup() {
    createCanvas(800, 800, WEBGL)
    colorMode(HSB)
}

function draw() {
    background("grey")
    formula()
    noFill()
    scale(5)
    strokeWeight(3)
    //beginShape()
    rotateZ(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    colorChange = 0;
    for (var i = 0; i < positionPoint.length-1; i++) {  
        stroke(colorChange, 255, 255)
        //vertex(positionPoint[i].x, positionPoint[i].y, positionPoint[i].z)
        line(positionPoint[i].x, positionPoint[i].y, positionPoint[i].z, positionPoint[i+1].x, positionPoint[i+1].y, positionPoint[i+1].z)
        colorChange += 1
        if (colorChange > 255) {
            colorChange = 0
        }
    }
    //endShape()
}

const formula = () => {
    var dx = (sigma * (y - x)) * dt
    var dy = (x * (prandtl - z) - y) * dt
    var dz = (x * y - rayleigh * z) * dt
    x = x + dx
    y = y + dy
    z = z + dz
    positionPoint.push(createVector(x, y, z))
}