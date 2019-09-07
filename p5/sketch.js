let NUM_LINES = 20;

var t = 0;

function setup() {
  let cnv = createCanvas(windowWidth/2, windowHeight/2);
  cnv.parent('progressive');
  interval();
}

function draw() {
  let speedX = abs(winMouseX - pwinMouseX) *10 ;
  let speedY = abs(winMouseY - pwinMouseY) *2 ;
  stroke(255);
  strokeWeight(2);
  translate(width/2, height/2);

  for(var i = 0; i< NUM_LINES; i++){
    line(x1(t + i), y1(t + i) , x2(t + i), y2(t + i) );
  }
  t+= 0.5;
}

function x1(x) {
  return sin(float(x) / 10) * 100 + sin(float(x)/5)*20;
}
function y1(x) {
  return cos(float(-x) / 10) * 100 * sin(float(x) / 10);
}
function x2(x) {
  return sin(float(x) / 10) * 500 + sin(float(x)) * 2;
}
function y2(x) {
  return -cos(float(x) / 20) * 200 + cos(float(x)/12) * 20 * sin(float(x) / 10);
}
function interval(){
  clear()
  setTimeout(interval, 100);
}
