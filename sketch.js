var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="green";
  fixedrect.debug=true;
  movingrect=createSprite(600, 200, 50, 50);
  movingrect.shapeColor="green";
  movingrect.debug=true;
  movingrect.velocityX=-2;
  fixedrect.velocityX=2;
}

function draw() {
  background(255,255,255);  
  //movingrect.y=mouseY;
  //movingrect.x=mouseX;

  if (movingrect.x-fixedrect.x<fixedrect.width/2 + movingrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2 + movingrect.width/2
   && movingrect.y-fixedrect.y<fixedrect.height/2 + movingrect.height/2
    && fixedrect.y-movingrect.y<fixedrect.height/2 + movingrect.height/2)  {
    //movingrect.shapeColor="red";
    //fixedrect.shapeColor="red";
    movingrect.velocityX=movingrect.velocityX*(-1);
    fixedrect.velocityX=fixedrect.velocityX*(-1);

  }
else{
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";}
  drawSprites();
}