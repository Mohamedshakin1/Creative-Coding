var table;

// To retrieve the file, we used function preload()
function preload() {
   // data file is stored in variable table
    table = loadTable("screen time.csv", "csv");
}

function setup() {
  createCanvas(600,400);
	noStroke(); // it removes the border of the shape
}


function draw() {
    background("#F8F4E1"); // background color
	textSize(18); // size of the text
	textStyle(BOLD);  // it sets text in bold
    textAlign(CENTER) // it aligns the text to center
	text('SCREEN TIME', width/2,50); // position of the text
	textSize(14); 
    translate(0,300); // it changes position of bar graph 
  
    // it gets data from the second row of the table
    var data = table.getRow(1).arr; 
  // Loop through each column of the table
    for(i = 0; i < table.getColumnCount(); i++) {
      // it calculates height of rectangle based on the data value (minutes value)
      var rectHeight = map(data[i], 0,240, 0,175);
      translate(i + 70,0); // it sets gap between the rectangles
      
      //it calculates the color based on the data value (minutes value)
	  lerpAm = map(data[i], 0,240, 0,1);
      var lerpCol = lerpColor(color(0,0,0),color(250,75,0),lerpAm);
      fill(lerpCol); // it fills color to rectangle
	  textAlign(CENTER);
      
      // it generates the rectangle shape and forms the bar graph
      rect(-20,0, 45,-rectHeight);
      
      // it gets data from the third row of the table and each data is positioned above the each rectangles
	  text(table.getRow(2).arr[i],0,-rectHeight-10);
	  fill(0);
      
      // it gets data from the first row of the table and each data is positioned below the each rectangles
	  text(table.getRow(0).arr[i],0,20);
  }
}