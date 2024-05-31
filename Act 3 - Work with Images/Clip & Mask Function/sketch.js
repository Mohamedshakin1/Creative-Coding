let img;

// To retrieve the file, we used function preload()
function preload(){
  img=loadImage('Mountain.jpg') // image file is stored in variable images
}

function setup() {
  createCanvas(400, 400);
  background("#B4B4B8"); // background color
  
  //Clip Function
  
  img.resize(200,200); // resizing the image
  let cnv7 = createGraphics(200,200); // creating sub canva to create shape
  cnv7.noStroke(); // it removes the border of the shape
  cnv7.triangle(100,20,200,120,0,120);  // Triangle
  cnv7.canvas.getContext("2d").clip();  // It creates traingle shape in sub canva
  cnv7.image(img,0,0); // it inserts the image in triangle shape
  image(cnv7,100,200); //  inserts sub canva inside the main canva and sets position of sub canva

  
  //Mask Function
  
  img.resize(200,200); // resizing the image
  let cnv5 = createGraphics(200,200); // creating sub canva to create combination of mutiple shapes
  cnv5.noStroke(); // it removes the border of the shape
  cnv5.triangle(0,0,100,100,0,200); // left triangle
  cnv5.triangle(100,100,200,0,200,200); // right triangle
  cnv5.rect(0,0,200,100); // rectangle
  cnv5.canvas.getContext("2d").clip();
  img.mask(cnv5); // it inserts the image in combination of multiple shapes
  image(img,100,70); //  inserts sub canva inside the main canva and sets position of sub canva
}