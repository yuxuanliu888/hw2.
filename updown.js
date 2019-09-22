function setup() {
  createCanvas(400, 400);
}
var x=1
var y=10
var z=1
var x1=1
var y1=2
var z1=10
function draw() {
  background(220);
  strokeWeight(z)
  line(x,10,10,11+y)
  x=x+y
  y=y+2
  if (y>=400){
  y=y*-1
  z=z*1.5 
  }
  strokeWeight(z1)
  ellipse(100, y1, 30);
  y1=y1+x1
  if (y1>400){
  x1=-3
  z1=z1*0.5}
  if (y1<0){
  x1=x1*-3
  z1=z1*1.5}
  
}
