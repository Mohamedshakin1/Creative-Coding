function setup() {
  createCanvas(400, 400);
  background(0,0,150);
  cnv3 = createGraphics(width, height); // creating sub canva to create text inside the shape
  cnv3.noStroke(); // it removes border of the shape
  cnv3.fill(200,200,0); // color of the shape
  scale(1.2) // increased the size of the shape by 1.2
  cnv3.triangle(0,200,100,100,200,200) // triangle
  cnv3.erase(); // it erases the text part in triangle
  cnv3.textSize(25); // font size
  cnv3.text('Hello',75,150); // inserts the text and sets the position of the text 
  cnv3.textSize(40); // font size
  cnv3.text('World',50,190) // inserts the text and sets the position of the text 
  image(cnv3, 70, 0); // inserts sub canva inside the main canva and set position of sub canva 
}
