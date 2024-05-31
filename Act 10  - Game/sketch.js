// We created some variables
let mode="title"  // current mode of the game
let car
let opp_car
let extra_car
let speed=2  // initial speed of the opposite car and road lane
let carX
let widthSize
let energy=100  // inital energy
let score=0     // initial score
let font;

// To retrieve the file, we used function preload()
function preload() {
  // font file is stored in variable font
  font= loadFont ("Comfortaa-Light.ttf");
}
  
function setup() { 
  // it sets canva to full height of the screen and full width of the screen
  createCanvas(windowWidth, windowHeight);
  textFont (font,50); // it sets font style 
  car=new main_car() // main_car() object is stored in variable car
  opp_car= new opposite_car()  // opposite_car() object is stored in variable car
  lane= new road_lane() // road_lane() object is stored in variable lane
  widthSize=width // data width is stored in variable widthSize
  carX=widthSize  // initial position of main car
  
}

function draw() {
  // if the value of mode variable is "title" then it will function titleScreen()
  if (mode=="title"){ 
    titleScreen()
  }
  
  // if the value of mode variable is "gamePlay" then it will function gamePlay()
  if (mode=='gamePlay'){
    gamePlay()
  }
  
  // if the value of mode variable is "gameLose" then it will function gameLose()
  if (mode=='gameLose'){
    gameLose()
    
  // if the value of mode variable is "gameWin" then it will function gameWin()
  }
  if (mode=='gameWin'){
    gameWin()
  }
}

//I created function titleScreen to display the title screen of the game
function titleScreen() {
  background("#DC5F00") // background color
  textSize(100); // size of the text
  textAlign(CENTER); // it aligns the text to center
  fill("#EEEEEE")  // the text color
  text('HIGHWAY',width/2,height/3);  // position of the text
  textSize(35); // size of the text
  textAlign(CENTER,CENTER);  // it aligns the text to center
  fill("#EEEEEE"); // the text color
  text('Press ENTER to start',width/2,height/2+55); // position of the text
  fill("#EEEEEE");  // the text color
  text('Score 100 to win!',width/2,height/2+125); // position of the text
  text('Press RIGHT ARROW or LEFT ARROW to move',width/2,height/2+200);
  
  // if button "ENTER" is pressed then it will reassign value 'gamePlay' to variable mode and it will resets the setting of the game and starts the game
  if (keyCode === ENTER){
    mode = 'gamePlay';
    opp_car.reset()
    lane.reset()
	}
}

//I created function gamePlay to play the game
function gamePlay(){
  background("#373A40")
  fill("#EEEEEE");
  textSize(20); 
  text ("Energy- ",70,30);
  text (energy, 125,31)
  text ("Score- ",63,60);
  text (score, 105,61)
  
  lane.draw() // this function is used for to draw the road lane
  lane.move() // this function is used for to move the road lane
  car.draw() // this function is used for to draw the main car
  car.move() // this function is used for to move the main car
  opp_car.draw() // this function is used for to draw the opposite car
  opp_car.move() // this function is used for to move the opposite car
  opp_car.collision() // this function is used for to change value of energy and score when the opposite car and the main car collides each other
  
  //if energy is less or equal to 0 then it reassign value 'gameLose' to variable mode
  if (energy<=0){
    mode = 'gameLose'
  }
  
  //if score is equal to 100 then it reassign value 'gameWin' to variable mode
  if (score==100){
    mode= "gameWin"
  }
}

//I created function gameLose to display the game over screen when the user lose the game
function gameLose(){
  background("#686D76")
  textSize(100);
  textAlign(CENTER);
  fill("#EEEEEE")
  text('YOU LOSE',width/2,height/3);
  textSize(45);
  textAlign(CENTER,CENTER);
  text('Play Again?',width/2,height/2+55);
  textSize(35);
  text('Press BACKSPACE to return to main screen',width/2,height/2+150);
  
  // if button "BACKSPACE" is pressed then it will reassign value 'title' to variable mode
  if (keyCode === BACKSPACE){
		mode = 'title';
	}
  
}

//I created function gameLose to display the game over screen when the user wins the game
function gameWin(){
  background("#EEEEEE")
  textSize(100);
  textAlign(CENTER);
  fill("#DC5F00")
  text('YOU WON',width/2,height/3);
  fill("#373A40")
  textSize(45);
  textAlign(CENTER,CENTER);
  text('Play Again?',width/2,height/2+55);
  textSize(35);
  text('Press BACKSPACE to return to main screen',width/2,height/2+150);
  // if button "BACKSPACE" is pressed then it will reassign value 'title' to variable mode
  if (keyCode === BACKSPACE){
		mode = 'title';
	}
}

// Creating main_car object
class main_car {
  
  //creating main_car object variables
  constructor() {
    this.carX=width;
    this.carY= height-100;
    this.bodyColor=[0,0,255,170]
    this.glassColor=[255,255,255,75]
    this.backlightColor1=[255,0,0,175]
    this.backlightColor2=[255,0,0,175]
    this.headlightColor=[255,255,0,100]
    this.indicatorColor="#FF7D29"
  }
  
  // creating main_car object 
  draw (){
    noStroke()
    fill(this.bodyColor);
    rect (this.carX,this.carY,40,60,8,8,5,5);
    rect (this.carX-4,this.carY+10,5,15);
    rect (this.carX-4,this.carY+10,5,15);
    rect (this.carX+39,this.carY+10,5,15);
    fill(this.glassColor);
    rect (this.carX+8,this.carY+10,25,10,2);
    fill(this.backlightColor1)
    rect (this.carX,this.carY+50,15,10,0,0,0,5);
    fill(this.backlightColor2)
    rect (this.carX+25,this.carY+50,15,10,0,0,5,0);
    stroke(this.headlightColor)
    line(this.carX+6,this.carY,this.carX+1,this.carY-10)
    line(this.carX+6,this.carY,this.carX+6,this.carY-10)
    line(this.carX+6,this.carY,this.carX+10,this.carY-10)
    line(this.carX+33,this.carY,this.carX+28,this.carY-10)
    line(this.carX+33,this.carY,this.carX+33,this.carY-10)
    line(this.carX+33,this.carY,this.carX+38,this.carY-10)
  }
  
  // setting the movement of the main_car object
  move() {
    
    // when button "LEFT" is pressed or long pressed, it changes direction  of main_car to left side
    if (keyIsDown(LEFT_ARROW)){
      this.carX-=50;
      carX-=50
      //whenever left button is pressed, left backlight of the car changes color to orange to show the indicator of the car
      this.backlightColor1=this.indicatorColor
      
      // it makes sure, it doesn't go out of the main screen
      if (carX<0){ 
        carX=0
      }
    }
    
    // if right button or left is not pressed, the backlight of car color will be in red 
    else {
      this.backlightColor1=[255,0,0,175]
      this.backlightColor2=[255,0,0,175]
    }
    
    // when button "RIGHT" is pressed or long pressed, it changes direction  of main_car to right side
    if (keyIsDown(RIGHT_ARROW)){
      this.carX+=50;
      carX+=50
      //whenever right button is pressed, right backlight of the car changes color to orange to show the indicator of the car
      this.backlightColor2=this.indicatorColor
      
      // it makes sure, it doesn't go out of the main screen
      if (carX>widthSize){
        carX=widthSize
      }
    }
    
    // main car will be visible within in a given screen
    if (this.carX < 15) {
			this.carX = 15;
		}
		
		if (this.carX+60 > width) {
			this.carX = width-60; 
		}
	}

}

// Creating opp_car object
class opposite_car {
  //creating opp_car object variables
  constructor() {
    widthSize=width
    this.oppX=random(0,widthSize)
    this.oppY= 0;
    this.speed=speed
    this.opp_bodyColor=[random(255),random(255),random(255),170]
    this.opp_backlightColor=[255,0,0,175]
    this.glassColor=[255,255,255,75]
  }
  
  // creating opp_car object 
  draw() {
    noStroke()
    fill(this.opp_bodyColor)
    rect(this.oppX,this.oppY,40,60,5,5,8,8);
    rect(this.oppX-4,this.oppY+30,5,15);
    rect(this.oppX+39,this.oppY+30,5,15)
    fill(this.glassColor)
    rect(this.oppX+8,this.oppY+40,25,10,2)
    fill(this.opp_backlightColor)
    rect(this.oppX,this.oppY,15,10,5,0,0,0)
    rect(this.oppX+25,this.oppY,15,10,0,5,0,0)
  }
  
  // setting the movement of the opp_car object
  move() {
    this.oppY+=this.speed  // initial speed of the opposite car
    
    // when opposite car touches to bottom of the screen
    if (this.oppY>height){
      //it generates different color to opposite car for next round
      this.opp_bodyColor=[random(255),random(255),random(255),170]
      //it changes different position of opposite car for the next round
      this.oppX=random(0,widthSize)
      this.oppY=0 // when opposite car touches to bottom of the screen, it resets the position of opposite car at the top of screen
      this.speed+=1 // it increases speed by 1 for next round
      score+=1 // it increases scores by 1 when opposite car touches to bottom of the screen
      
      // it sets maximum speed of opposite car to 20
      if (this.speed>21){
        this.speed=20}
    }
  }
  
  // it resets to initial score and energy and resets to initial speed and position of opposite car
  reset(){
    this.oppY=0
    this.speed=2
    score=0
    energy=100
  }
  
  // When opposite car touches to the main car, it reduce its energy
  collision() {
    if ((this.oppX + 120 >= carX && this.oppX <= carX + 35) && (this.oppX <= carX+35 && this.oppX)  && (this.oppY>height-100)){
      energy-=1
     }
  }
  
}

// Creating road_lane object
class road_lane {
  //creating road_lane object variables
  constructor() {
    this.maxCol=5  // number of columns of lane
    this.maxRow=5  // number of rows of lane
    this.laneX=0
    this.laneY=0
    this.spaceX=(width/this.maxCol) // horizontal space between the lanes
    this.spaceY=(height/this.maxRow) // vertical space between the lanes
    this.lanePos=2 // initial position of the lane
    this.laneSpeed=speed  // initial speed of the lane
    
  }
  
  // creating road_lane object 
  draw() {
    
    // it generates lanes on all 5 columns and 5 rows
    for (this.laneX=0; this.laneX < this.maxCol; this.laneX++){
      for (this.laneY=0; this.laneY< this.maxRow ; this.laneY++) {
        fill(255,255,255,50)
        rect (this.laneX*this.spaceX+130 , this.laneY* this.spaceY+75+this.lanePos, 15, 45)
      }
    }
  }
  
  // setting the movement of the road_lane object
  
  move(){
    this.lanePos+=this.laneSpeed  // initial speed of the lanes
    if (this.lanePos >= this.spaceY) {
      this.lanePos=0  // when lane touches to bottom of the screen, it resets the position of lane at the top of screen
      this.laneSpeed+=0.5; // it increases the speed of the lane by 0.5
      
      // it sets maximum speed of lane to 10
      if (this.laneSpeed>11){
        this.laneSpeed=10}
      }
    }
  
  // it resets to initial speed and position of road lane
    reset(){
    this.lanePos=speed
    this.laneSpeed=0.5
  }
}
  



