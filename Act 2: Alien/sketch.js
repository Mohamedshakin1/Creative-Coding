function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#FFF5E0"); // background color
  translate (width/2-30, 0); // changing the position of alien
  fill("#FF6969"); // color of alien face
  scale(1.5,1.5); // increased the size of alien by 1.5,1.5 
  
  
  noStroke(); 
  //First half of the face
  beginShape();
  vertex(0,75);
  bezierVertex (0,75,25,15,50,75);
  endShape();
  
  //Other half of the face
  beginShape();
  vertex(50,75);
  bezierVertex (50,75,25,155,0,75);
  endShape();
  
  fill ("#141E46"); // color of alien's eyes and nose
  ellipse (7,75,15,10); //One eye
  ellipse (43,75,15,10); //Other eye
  ellipse (23,90,5,10);  //Nose
  ellipse (28,90,5,10);  //Nose
  
  //Mouth
  beginShape();
  vertex(20,100);
  bezierVertex (20,100,25,110,30,100);
  endShape();
  
  //Hair
  beginShape();
  vertex (0,60);
  bezierVertex (50,25,50,60,40,60);
  endShape();
  
  //One of the leg
  fill("#BB2525");  // color of alien's leg
  beginShape();
  vertex (3,148);
  bezierVertex(10,145,30,150,10,200);
  bezierVertex(10,200,-20,250,0,200);
  endShape();
  
  //other leg
  fill ("#BB2525"); // color of alien's leg
  beginShape();
  vertex(30,148);
  bezierVertex(20,145,-15,150,35,200);
  bezierVertex(35,200,0,250,45,200);
  endShape();
  
  //Multiple Hands
  stroke("#141E46"); // border color of alien's hand
  strokeWeight(1.5)
  fill ("#FF6969"); // color of alien's hand
  beginShape();
  vertex(15,107);
  bezierVertex (0,107,-5,90,-30,150);
  bezierVertex (-30,150,-25,175,-20,150);
  bezierVertex (-20,150,-15,145,-10,150);
  bezierVertex (-10,150,-5,175,0,150);
  bezierVertex (0,150,5,145,10,150);
  bezierVertex (10,150,15,175,20,150);
  bezierVertex (20,150,25,145,30,150);
  bezierVertex (30,150,35,175,40,150);
  bezierVertex (40,150,45,145,50,150);
  bezierVertex (50,150,55,175,60,150);
  bezierVertex (60,150,60,100,35,105);
  endShape();
  
}