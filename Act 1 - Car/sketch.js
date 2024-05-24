function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(175,170,150); // background color
  noStroke();  // it removes the border
  fill (75); // color of the car body
  rect(125,165,150,60); //  lower car body
  rect (200,130,50,35); // square upper car body
  triangle (250,130,275,165,250,165); // triangle upper car body
  fill (200); // color of the window
  rect (210,140,32,25);  // square window
  triangle (250,140,267,165,250,165); // triangle window
  fill(175,170,150); // color of gap between car body and tyre
  ellipse (175,225,45,45); // gap between car body and first tyre
  ellipse (240,225,45,45); // gap between car body and second tyre
  fill(0); // color of tyre
  ellipse (175,225,35,35); // first tyre
  ellipse (240,225,35,35); // second tyre
  stroke(0); // color of road line and flag border
  strokeWeight(3); // thickness of road line and flag border
  line (126,165,126,130); // height of flag
  fill (0,255,0); // color of flag
  triangle (126,130,126,150,105,140); // flag
  line (0,242,400,242); // road line
}