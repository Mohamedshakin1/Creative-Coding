var d=50;
var x,y
var c;

function setup() {
  c=createCanvas(400, 400);
  background ("#2D3250");
  noStroke ();
  //to remove the half shape on the uppermost left side
  mouseX = -d;
  mouseY = -d;
}
  

function draw() {
  // it draws the shape wherever the cursor moves
  x = mouseX; 
  y = mouseY;
  fill (220, 242, 241, 50); // fill the color of the shape with opacity of 50
  translate(-10,30); // it change the position of shape to make it center of the cursor
  
  //Heart shape
  beginShape();
  vertex(x+5*2,y);
  bezierVertex(x-5*2,y-10*2,x-20*2,y-20*2,x-10*2,y-30*2);
  bezierVertex(x-5*2,y-33*2,x+0,y-25*2,x+5*2,y-25*2);
  bezierVertex(x+10*2,y-25*2,x+15*2,y-33*2,x+20*2,y-30*2);
  bezierVertex(x+30*2,y-20*2,x+15*2,y-10*2,x+5*2,y+0)
  endShape();

}

function keyPressed() {
  if (keyCode == 65);{ // it saves the images when key "A" or "a" is pressed 
  
  saveCanvas (c, 'Mouse Interactive Activity', 'jpg');  // (file, filename, format)
    // count value will be taken from variable count from top
  }
}