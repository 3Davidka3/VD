function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  directionalLight(250, 250, 250, 500, 100, 500);
  directionalLight(250, 250, 250, -500, -100, -500);
  rotateY(mouseX  * 0.01);
  rotateX(mouseY  * 0.01);
  fill(250);
  box(100, 170, 15, );
  fill(0);
  box( 90, 130 , 17);
  line(mouseX, 0, mouseX, 100);
  
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

  