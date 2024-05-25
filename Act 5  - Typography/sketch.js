var font;

function preload() {
  font= loadFont ("Comfortaa-Light.ttf")
}

var points1, points2;
function setup() {
  createCanvas(400, 400);
  background ("#22253C");
  fill (255); // text color
  noStroke(); // it removes the border of the circle
  
  // it inserts the font and sets the x and y position of the font and it sets size of font and determines how many points generated
  points1= font.textToPoints ('BATH SPA', 60,175,60, {sampleFactor: 0.20}) ;
  
  points2= font.textToPoints ('UNIVERSITY', 60,250,50, {sampleFactor: 0.20}) ;
  
  // It takes value from variable points1 and generates the number of circles in font and sets height and width of the circle to 3
  for (var i=0; i<points1.length; i++)  {
    var p= points1[i];
    ellipse (p.x, p.y, 3, 3);
  }
    
  // It takes value from variable points2 and generates the number of circles in font and sets height and width of the circle to 3
    for (var j=0; j<points2.length; j++) {
      var q= points2[j];
      ellipse (q.x, q.y, 3, 3); 
  }
  
}
  