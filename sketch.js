let x = 200;
let speed = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("pink");
  ellipse(x,height/2,40);
  if (x >= width - diameter/2)
  speed = speed * -1;
  x = x + speed;
}