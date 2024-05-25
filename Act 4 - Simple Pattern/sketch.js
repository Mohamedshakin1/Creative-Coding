function setup() {
  var maxCol=5, maxRow=5 // number of columns and rows
  var x1=0, y1=20, x2=20, y2=0, x3=40, y3=20; // x1 and y1 are first vertex of triangle, x2 and and y2 are second vertex of triangle and x3 and y3 are third vertex of triangle
  var xSpacing= (width/maxCol*5); // horizonal space between the triangles
  var ySpacing= (height/maxRow*4); // vertical space between the triangles

  createCanvas(500, 400);
  background ("#222831");
  translate (25,30); // changing the position of the triangles
  for ( var x=0; x<maxCol; x++) { // it generates triangles on all 5 columns
    for (var y=0; y<maxRow; y++) { // it generates triangles on all 5 rows
      if (x==y) { // it fills random color to triangle when column number is equal to row number
      fill (random(255),random(255),random(100));
      }
      else {
        fill ("#76ABAE"); // it fills this color to remaining triangles
      }
      noStroke() // it removes the border of the shape
      
      // it generates same size of triangles in all 5 columns and rows with space between them 
      triangle (x1+x*xSpacing, y1+y*ySpacing, x2+x*xSpacing, y2+y*ySpacing, x3+x*xSpacing, y3+y*ySpacing);
    }
  }
}
