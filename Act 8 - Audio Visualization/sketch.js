var s01, s02, s03, s04, s05;
var c;
var x
var y
var r,g,b

// To retrieve the file, we used function preload()
function preload() {
  // audio files is stored in variable s01, s02, s03, s04, s05
  s01=loadSound('bubbles.mp3');
  s02=loadSound('pinwheel.mp3');
  s03=loadSound('moon.mp3')
  s04=loadSound('corona.mp3');
  s05=loadSound('piston-2.mp3')
}

function setup() {
  createCanvas(400,400);
  background(255);
  // the audio file volume is sets to full volume
  s01.setVolume(1); 
  s02.setVolume(1);
  s03.setVolume(1);
  s04.setVolume(1);
  s05.setVolume(1);
  noStroke();
}

function draw(){
  background(255);
  // when key 'a' or 'A' is pressed then it will call function rectFunction () and draws the rectangle shape
  if (key=='a' || key=='A'){
    rectFunction()
  }
  
  // when key 's' or 'S' is pressed then it will call function starFunction () and draws the star shape
  else if (key=='s' || key=='S'){
    starFunction()
  }
  
  // when key 'd' or 'D' is pressed then it will call function heartFunction () and draws the heart shape
  else if (key=='d' || key=='D') {
    heartFunction()
  }
  
  // when key 'f' or 'F' is pressed then it will call function triangleFunction () and draws the triangle shape
  else if (key=='f' || key=='F') {
    triangleFunction()
  }
  
  // when key 'g' or 'G' is pressed then it will call function circleFunction () and draws the circle shape
  else if (key=='g' || key=='G') {
    circleFunction()
  }
}

function rectFunction(){
  // it fill random color and changes the position of shape whenever key 'a' or 'A' is pressed
  fill (r,g,b)  
  rect (x,y, 50,50) 
}

function starFunction() {
  // it fill random color and changes the position of shape whenever key 's' or 'S' is pressed
  fill (r,g,b)
  beginShape();
  scale(1.7)
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

function heartFunction() {
  // it fill random color and changes the position of shape whenever key 'd' or 'D' is pressed
  fill (r,g,b)
  beginShape();
  vertex(x+5*2,y);
  bezierVertex(x-5*1.7,y-10*1.7,x-20*1.7,y-20*1.7,x-10*1.7,y-30*1.7);
  bezierVertex(x-5*1.7,y-33*1.7,x+0,y-25*1.7,x+5*1.7,y-25*1.7);
  bezierVertex(x+10*1.7,y-25*1.7,x+15*1.7,y-33*1.7,x+20*1.7,y-30*1.7);
  bezierVertex(x+30*1.7,y-20*1.7,x+15*1.7,y-10*1.7,x+5*1.7,y+0)
  endShape();
}

function triangleFunction() {
  // it fill random color and changes the position of shape whenever key 'f' or 'F' is pressed
  fill (r,g,b)
  triangle (x, y, x-25, y+50, x+25, y+50)
}

function circleFunction() {
  // it fill random color and changes the position of shape whenever key 'g' or 'G' is pressed
  fill (r,g,b)
  ellipse (x,y,50,50)
}

function keyTyped() {
  if (key=='a' || key=='A') { // when key 'a' or 'A' is pressed
    s01.play(); // it plays the audio file
    x= random(0,350) // it generates random position of x- axis
    y= random(0,350) // it generates random position of y- axis
    // it generate random color
    r= random(0,255)
    g= random(0,255)
    b= random(0,255)
  }


  else if (key=='s' || key=='S'){ // when key 's' or 'S' is pressed
    s02.play(); // it plays the audio file
    x= random(25,175) // it generates random position of x- axis
    y= random(25,175) // it generates random position of y- axis
    // it generate random color
    r= random(0,255)
    g= random(0,255)
    b= random(0,255)
  }
  
  else if (key=='d' || key=='D'){ // when key 'd' or 'D' is pressed
    s03.play(); // it plays the audio file
    x= random(50,350) // it generates random position of x- axis
    y= random(100,400) // it generates random position of y- axis
    // it generate random color
    r= random(0,255)
    g= random(0,255)
    b= random(0,255)
  }
  
  else if (key=='f' || key=='F'){ // when key 'f' or 'F' is pressed
    s04.play(); // it plays the audio file
    x= random(25,350) // it generates random position of x- axis
    y= random(0,350) // it generates random position of y- axis
    // it generate random color
    r= random(0,255)
    g= random(0,255)
    b= random(0,255)
  }
  
  else if (key=='g' || key=='G'){  // when key 'g' or 'G' is pressed
    s05.play(); // it plays the audio file
    x= random(25,350) // it generates random position of x- axis
    y= random(25,350) // it generates random position of y- axis
    // it generate random color
    r= random(0,255)
    g= random(0,255)
    b= random(0,255)
  }
  
}