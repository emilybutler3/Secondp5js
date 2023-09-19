let x = 100;
let dx = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("pink");
  ellipse(x, width/2, height/2, 200);
  x = x + dx;
  if(x> width){
      dx = -1;
  }
  if(x < 0) {
      dx = 1;
  }

  function mousePressed() {
    noLoop();
  }

  function mouseReleased(){
    loop();
  }

}