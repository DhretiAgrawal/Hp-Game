var wall1 , wall2, wall3, wall4 , wall5, wall6, wall7 , wall8 , wall9 , wall10 , wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30 , wall31, wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall40,wall41,wall42,wall43,wall44,wall45,wall46 ;  
var player , wallG , giantG , deatheaterG; 
var giant1, giant2, giant3, giant4, giant5,giant6;
var deatheater1, deatheater2, deatheater3,deatheater4,deatheater5;
var  ghostImg1 ,ghostImg2,ghostImg3 , ghostImg4 , ghostAngry, giantImg1 , giantImg2, giantimg3 ,  giantImg4, bg ;
var harryImg1,harryImg2,HarryImg3, harryImg4,harryImg5,harryImg6;
var potion1 , potion2,potion3,potion4,potion5;
var Cpotion = 0;
//var Cspell = 0;

function preload(){
  bg=loadImage("images/Creepy Forest.jpg");

  potion1=loadImage("images/potion 1.jpg");
  potion2=loadImage("images/potion2.jpg");
  potion3=loadImage("images/potion3.jpg");
  potion4=loadImage("images/potion4.jpg");
  potion5=loadImage("images/potion5.jpg");

  ghostImg1=loadImage("images/Ghost front.png");
  ghostImg2=loadImage("images/Ghost back.png");
  ghostImg3=loadImage("images/Ghost right .png");
  ghostImg4=loadImage("images/Ghost side face.png");
  ghostAngry=loadImage("images/Ghost angry.png");
   
  giantImg1=loadImage("images/Giant disturbed.png");
  giantImg2=loadImage("images/Giant down.png");  
  giantImg3=loadImage("images/Giant hands up.png");
  giantImg4=loadImage("images/Giant holds.png");

  harryImg1=loadImage("images/Harry backwards run.png");
  harryImg2=loadImage("images/Harry_running_right.png");
  harryImg3=loadImage("images/Harry_running.png");
  harryImg4=loadImage("images/Harry_standing_back.png");
  harryImg5=loadImage("images/Harry_standing_front.png");
  harryImg6=loadImage("images/harryright .png");
 
}

function setup() {
  createCanvas(1250,600);

  
  player = new Player (60,50,20,20);

  wallG = new Group();
  createWalls();

  giantG = new Group();
  createGiants();

  deatheaterG = new Group();
  createDeathEaters();  

  potion2 = new Potion (265,244,20,20);
  potion1 = new Potion(697,35);
  potion3 = new Potion(1075,59);
  potion4 = new Potion(194,449);
  potion5 = new Potion(724,368);
  potion6 = new Potion(965,235);
  potion7 = new Potion(965,235);
}

function draw() {
  background(bg);  
  player.move();
  player.count();
  player.harry.collide(wallG);

  moveGiants();
  moveDeathEaters();
  console.log(mouseX,mouseY);
  drawSprites();

}


/*



Variables to count potions & spells (they will start with 0)
 Harry touches potion -- increase the value by 1

*/