var tyler1;
var tyler2;
var tyler3;
var tyler4;
var face1, face2, face3, face4;
//var pic;

var randYPos1;
var randYPos2;
var randYPos3;
var randYPos4;

function preload() {
  face1 = loadImage("images/tyler.jpg");
  face2 = loadImage("images/tyler-2.jpg");
  face3 = loadImage("images/tyler-3.jpg");
  face4 = loadImage("images/tyler-4.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  randYPos1 = random(height);
  randYPos2 = random(height);
  randYPos3 = random(height);
  randYPos4 = random(height);



  tyler1 = new Meme(face1,1, randYPos1, 0, 2);
  tyler2 = new Meme(face2,1,randYPos2, 0, 5);
  tyler3 = new Meme(face3,1, randYPos3, 0, 10);
  tyler4 = new Meme(face4,1, randYPos4, 0, 3);

}

function draw() {
  background(0);

  tyler1.update();
  tyler1.display();

  tyler2.update();
  tyler2.display();

  tyler3.update();
  tyler3.display();

  tyler4.update();
  tyler4.display();

  let t = 'WHICH TYLER IS THE FASTEST?';
fill(255);
text(t, 150, 150); 

}

function Meme(pic,tempSize, tempY, tempX,tempSpeed) {
  this.pic = pic;
  this.size = tempSize;
  //this.colorR = tempColorR;
  this.yPos = tempY;
  this.xPos = tempX;
  //this.accel = accel;
  this.speed = tempSpeed;

  this.update = function () {
    this.xPos = this.xPos + this.speed;

    if (this.xPos > width) {
      this.xPos +=1; 
    }

  }

  this.display = function () {
    //var pic = [face1,face2,face3,face4];

    image(pic,this.size * 0.5 + this.xPos,randYPos1);
    //image(face2,this.size * 0.5 + this.xPos,randYPos2);
    //image(face3,this.size * 0.5 + this.xPos,randYPos3);
    //image(face4,this.size * 0.5 + this.xPos,randYPos4);
    
  }
 /* this.interact = function()
  {
      if (keyIsPressed === true)
      {
        accel += 1;
        this.accel = accel;
      }
  }*/


  

}