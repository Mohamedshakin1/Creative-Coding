var img, x, y;

// To retrieve the file, we used function preload()
function preload() {
img = loadImage("yellowbox.png"); // image file is stored in variable images
}

function setup() {
createCanvas (400, 400);
background(0);
noStroke(); // it removes the border of the shape
}

function draw() {
img.resize(400,400); // it fits image to given screen
x = random(width); // it gets x axis from random value of width
y = random(height); // it gets y axis from random value of height
var c = img.get(x, y); // it gets color data from variable x and y
fill(c[0], c[1], c[2], 60); // fills the color to shape with opacity of 60
  
//Star shape
beginShape();
  vertex (x,y+5);
  vertex(x+5,y-5);
  vertex(x+10,y+5);
  vertex(x+20,y+5);
  vertex(x+10,y+15);
  vertex(x+15,y+25);
  vertex(x+5,y+20);
  vertex(x-5,y+25);
  vertex(x,y+15);
  vertex(x-10,y+5)
  vertex (x,y+5);
  endShape();
}