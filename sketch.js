var pc , fish1 , fish2 , fish3 , fish4;
var beachy;
var fishGroup;
var shark1;
var mine1,mine;



function setup() {
  createCanvas(displayWidth,displayHeight);
  //creating pc sprites
  pc = createSprite(displayWidth/2,displayHeight/2,50,50);
  shark = loadImage("Sprites/jawr.png");
  
  //mine
  mine1 = loadImage("Sprites/mine2.png")

  //background
  beachy = loadImage("Sprites/sea background.png");
  
  //fish
  fish1 = loadImage("Sprites/1.png");
  fish2 = loadImage("Sprites/2.png");
  fish3 = loadImage("Sprites/3.png");
  fish4 = loadImage("Sprites/4.png");

}

function draw() {  
  background(beachy);
  pc.addImage(shark);
  pc.scale = 0.5;

  pc.y=mouseY;
  pc.x=mouseX;

  spwanFish();
  spawnMines();
  drawSprites();
  fishGroup = new Group();
}

function spwanFish(){
if(frameCount % 120 === 0) {
fish = createSprite(displayWidth+5,Math.round(random(displayHeight/2+100,displayHeight)),10,40);
fish.velocityX=-2

    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fish.addImage(fish1);
              break;
      case 2: fish.addImage(fish2);
              break;
      case 3: fish.addImage(fish3);
              break;
      case 4: fish.addImage(fish4);
              break;
      
      default: break;
    }   
    fishGroup.add(fish);
   fish.scale = 0.5;
} 
}

function spawnMines(){
 if(frameCount % 250 === 0) { 
  mine= createSprite(displayWidth+5,Math.round(random(displayHeight/2+100,displayHeight)),20,40)   
  mine.addImage(mine1);
  mine.velocityX=-1;

  mine.scale=0.5
}
}

