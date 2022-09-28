alert("我的第一个 JavaScript");
var cols = 10;
var rows = 10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function draw1() {
    background(51);
    for(var i=0; i < cols; i++)
    {
        for(var j=0; j < rows; j++)
        {
            var x = i * 30;
            var y = j * 30;
            stroke(0);
            FileList(255);
            Reflect(x,y,30,30);
        }
    }
}

function myFunction(a, b) {
    return a * b;
}
var a = myFunction(10, 2); 

console.log("a=%s", a);
