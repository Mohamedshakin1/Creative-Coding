var img, x, y;

// To retrieve the file, we used function preload()
function preload() {
img = loadImage("EXPO.jpeg"); // image file is stored in variable images
}

function setup() {
createCanvas (400, 400);
background(0);
noStroke(); // it removes the border of the shape
}

function draw() {
background(0);
x = mouseX;  // it gets x- axis value from position of the mouse
y = mouseY;  // it gets y- axis value from position of the mouse
img.resize(400,400) // it fits image to given screen
image( img, 0, 0); // position of the image
var c = get(x, y); // it gets color data from mouse
fill(c); // fills the color of the shape depending on where mouse points to paricular color of the image
translate(-10,30); // it change the position of shape to make it center of the cursor
  
//Heart Shape
beginShape();
  vertex(x+5*2,y);
  bezierVertex(x-5*2,y-10*2,x-20*2,y-20*2,x-10*2,y-30*2);
  bezierVertex(x-5*2,y-33*2,x+0,y-25*2,x+5*2,y-25*2);
  bezierVertex(x+10*2,y-25*2,x+15*2,y-33*2,x+20*2,y-30*2);
  bezierVertex(x+30*2,y-20*2,x+15*2,y-10*2,x+5*2,y+0)
  endShape();

}