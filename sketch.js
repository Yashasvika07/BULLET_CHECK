var bullet,wall;
var speed,thickness, weight;
var START= 0;
var PLAY = 1;
var ENDgreen = 2;
var ENDred = 4;
var lets = "let's";

var gameState = START;

var greenWall, redWall;

function preload(){
  greenWall = loadImage("greenwall.png");
  redWall = loadImage("redwall.png");
}

function setup() {
  createCanvas(1535,400);

  thickness = Math.round(random(22,83));
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));

  bullet = createSprite(50,200,50,10);
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0);

  if(gameState === START){
    bullet.visible = false;
    wall.visible = false;
    fill("lavender");
    textSize(25);
    textFont("Ink Free");
    text('Hey There!!🤍🤍 Welcome to BULLET TEST!!🤍🤍 The Military has been testing the reliability of walls when bullets hit them. So, here am ', 20,30);
    text('with a project made by me to test the devastatig effects on the walls with different thickness and different speeds of bullets. So,' + lets,20,70);
    text(' get going! Hope you like the project, do not forget to hit a like :)',20,110);
    textSize(45);
    text('PRESS SPACE TO CHECK WITH RANDOM VALUES OF SPEED OF BULLETS ',2,250);
    text('AND THICKNESS OF WALLS.',400,300);

    if(keyDown("space")){
      gameState = PLAY;
    }
  }
  
  if(gameState === PLAY){
    fill("lavender");
    textSize(25);
    textFont("Ink Free");
    text('Speed : ' + speed ,30,30);
    text('Weight : '+ weight ,200,30 );
    text('Thickness : '+ thickness , 400,30);

    wall.visible = true;
    bullet.visible = true;

    bullet.velocityX = speed;

   if(wall.x - bullet.x <= bullet.width/2 + wall.width/2 ){
      fill("lavender");
      textSize(45);
      textFont("Ink Free");
      text('Press SPACE-BAR to see the result...',170,200);
      bullet.velocityX = 0;
      bullet.x = wall.x ;

      var damage = 2*weight*speed*speed/(thickness * thickness * thickness );
      console.log(damage);
      if(damage > 32){
        bullet.shapeColor = color("red");
      }
      else if(damage < 32){
        bullet.shapeColor = color("green");
      }
      if(damage < 32 && keyDown('space')){
        gameState = ENDgreen;
      }
      else if(damage > 32 && keyDown('space')){
        gameState = ENDred;
      }
    }
  }

  if(gameState === ENDgreen){
    wall.addImage(greenWall);
    wall.visible = true;
    wall.x = 100;
    wall.y = 200;
    wall.scale = 0.2;

    fill("lavender");
    textSize(35);
    textFont("Ink Free");
    text('Great going! This is actually great .. Advised by me ..',350,200);
    text('I fully support this ! ! !',450,300);
  }
  
  if(gameState === ENDred){
    wall.addImage(redWall);
    wall.visible = true;
    wall.x = 150;
    wall.y = 200;
    wall.scale = 0.2;

    fill("lavender");
    textSize(45);
    textFont("Ink Free");
    text('Gosh! People might be killed! !! !! ', 410,200);
    text('Cannot support it! ! !',460,300);
  }

  drawSprites();
}