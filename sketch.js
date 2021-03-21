var car,carImg;
var PLAY=1;
var END=0;
var START=3;
var gameState=PLAY;
var distance=0
var input,form,title,buttun,car1,car,rty,shield,slider,hypeDocument,nameName;
var score=0
var SELECTOR=2
var sheildTime=5
var coin=0
var GARAGE=4
var INS=5
var playerCount=0;
var pcount=0
var Lap=0
var scoreK=0
var playerRealcount=0
function preload(){
carImg=loadImage("Formula.png")
bg=loadImage("track.jpg")
carIm31=loadImage("car5.png")
carIm3=loadImage("car1.png")
song=loadSound("sonicastronomia.mp3")
spec=loadSound("spectre.mp3")
alo=loadSound("alone.mp3")
dar=loadSound("dark.mp3")
Over=loadImage("over.png")
overSnd=loadSound("over.wav")
sh=loadImage("shield11.png")
fad=loadSound("fade.mp3")
lil=loadSound("lilysng.mp3")
onmy=loadSound("onMyWay.mp3")
}
function setup(){
  let di=displayDensity();
  pixelDensity(di)
  createCanvas(900, 500);
  database = firebase.database();
  gameState=START
  player=new Player()
  form=new Form()
  form.display();
  
  background1 = createSprite(600,250,1000,1000);
  background1.addImage(bg);
  background1.scale = 1
  background1.velocityX+-5
  


 car= createSprite(100,150,20,20)
 car.addImage(carImg); 
 car.scale=0.6

 console.log(gameState)
 
  missileGr=new Group();
  invaderGr=new Group();
  invader1GR=new Group();
  shieldGR=new Group();
  
  
}
function draw(){
  background(bg)


 
 
  if(gameState===END){
    car.addImage(Over);
    car.scale=0.8;
    background1.velocityX=0;
    dar.stop();
    song.stop();
    alo.stop();
    spec.stop()
    lil.stop();
    fad.stop();
    onmy.stop();
    reset();
    car.setCollider("rectangle",0,1000,-5,-5);
    car.x=200;
    car.y=200;
    car.visible=true
    
    clear();
    

    textSize(30)
    fill("white")
    
    spec.stop();
    alo.stop();
    
  

    
  }

  if(car.isTouching(shieldGR)){
    shield.x=car.x
    shield.y=car.y
    shield.scale=0.2
    sprite=createSprite(80,50,100,30)
    sprite.visible=false;
  
    text("You are with shield. shield CountDown:"+sheildTime,sprite.x+100,sprite.y);

    if(car.isTouching(invaderGr)){
      invaderGr.destroyEach();
    }
  }
  
  



  if(keyDown("up")){
    car.velocityY=-6
  
  }
  if (keyWentUp("up")) {
    car.velocityY=0
  }
  if(keyDown("down")){
    car.velocityY=6
  
  }
  if (keyWentUp("down")) {
    car.velocityY=0
  }
  if(keyDown("right")){
    background1.velocityX+-5
  }
  if (background1.x <-2000){
    background1.x=background1.width/2
    Lap+=1
  }
  

  if(gameState===3){
 
    car.visible=false
    background1.visible=false
}


//player.getName();






 

  
  



  drawSprites();
  fill("white")
textSize(20)

if(gameState!==START&&gameState!==SELECTOR&&gameState!==END&&gameState!==GARAGE&&gameState!==INS){
  gara=createSprite(850,100,100,50);
  gara.visible=false;
  text("(Shop)",gara.x-20,gara.y)
  if(mousePressedOver(gara)){
    gameState=GARAGE
  }
}
scoreS=createSprite(50,50,50,50)
scoreS.visible=false;
if(gameState!==START&&gameState!==INS){
fill("white")
stroke("blue")
strokeWeight(4)


text("Coin :"+coin,700,50);
text("Lap: "+Lap,800,50)


  text("Score:"+score+"m",scoreS.x,50);


}
else{
  fill("black")
stroke("black")
strokeWeight(2)

text("Score:"+score+"m",scoreS.x,50);
text("Coin :"+coin,700,50);
text("Lap: "+Lap,800,50)
}
if(gameState===PLAY){
  car.addImage(carImg);
  invaderGr.collide(invaderGr);
  invaderGr.collide(invaderGr);
  car.y=World.mouseY
  updateDistance();
  if(keyWentDown("g")){
    gameState=GARAGE
  }
  if(background1.velocityX<-5||background1.velocityX>10){
    if(frameCount%25===0){
    score+=100
    }
  }
  if(background1.velocityX<-10||background1.velocityX>15){
    if(frameCount%25===0){
    score+=150
    }
  }
  if(background1.velocityX<-15||background1.velocityX>20){
    if(frameCount%25===0){
    score+=200
    }
  }
  if(background1.velocityX<-20||background1.velocityX>25){
    if(frameCount%25===0){
    score+=250
    }
  }

  if(background1.velocityX<-25||background1.velocityX>30){
    if(frameCount%25===0){
    score+=300
    }
  }
  if(background1.velocityX<-30||background1.velocityX>35){
    if(frameCount%25===0){
    score+=350
    }
  }
  if(background1.velocityX<-35||background1.velocityX>40){
    if(frameCount%25===0){
    score+=400
    }
  }
  if(background1.velocityX<-40||background1.velocityX>45){
    if(frameCount%25===0){
    score+=450
    }
  }

  if(background1.velocityX<-45||background1.velocityX>50){
    if(frameCount%25===0){
    score+=500
    }
  }
  if(background1.velocityX<-50||background1.velocityX>55){
    if(frameCount%25===0){
    score+=550
    }
  }
  if(background1.velocityX<-55||background1.velocityX>60){
    if(frameCount%25===0){
    score+=600
    }
  }
  if(background1.velocityX<-60||background1.velocityX>65){
    if(frameCount%25===0){
    score+=650
    }
  }

  if(background1.velocityX<-65||background1.velocityX>70){
    if(frameCount%25===0){
    score+=700
    }
  }
  if(background1.velocityX<-70||background1.velocityX>75){
    if(frameCount%25===0){
    score+=750
    }
  }
  if(background1.velocityX<-75||background1.velocityX>80){
    if(frameCount%25===0){
    score+=800
    }
  }
  if(background1.velocityX<-80||background1.velocityX>85){
    if(frameCount%25===0){
    score+=850
    }
  }
  if(car.isTouching(shieldGR)){
    shield.y=car.y
    text("Shield Cooldown:"+sheildTime,scoreS.x+350,50);
    if(frameCount%50===0){
    sheildTime-=1
    }
    if(car.isTouching(invaderGr)){
    
      




      invaderGr.destroyEach();
      
    }
  
   

  }
  else{
    shieldGR.scale=0.1;
    if(car.isTouching(invaderGr)){
    gameState=END
    overSnd.play();
    }
  }
  
  
  if(frameCount%150===0){
    spawnObstacles();
    spawnObstacles1();
  }
  if(frameCount%200===0){
    spawnShield();
    
  }


  car.setCollider("rectangle",0,0,250,90);
  car.visible=true
  background1.visible=true
  if(sheildTime===0){
    shield.x=car.x-500
    sheildTime=5
  
  }
  

  

  
  
  
  if(frameCount%25===0 && keyDown("right")){
  background1.velocityX+=-5
  score+=100

  
  
  updateDistance();
  if(frameCount%150===0){
  coin+=20
  
  
  
  }

  invaderGr.setVelocityXEach(+-5);
  }
  else{
    background1.velocityX=background1.velocityX;
  }
  if(keyDown("left")){
    background1.velocityX=0
    
  }
  if(keyWentUp("right")){
    
    
  }
  
  if(frameCount%150===0){
   
  }


  
 
  
  
  input.hide();
  buttun.hide();
  title.hide();
  }
if(gameState===GARAGE){
  car.visible=false;
  invaderGr.setVelocityXEach(0)
  background1.velocityX=0
  sheildValueIncreaser=createSprite(100,450,300,100);
  sheildValueIncreaser.visible=false
  noStroke();
  fill("white")
  text("shield Cooldown +5",sheildValueIncreaser.x-50,sheildValueIncreaser.y);
  
  if(frameCount%5===0){
  if(mousePressedOver(sheildValueIncreaser)){
    
     if(coin===100||coin>100){
       sheildTime+=5;
       coin=coin-100
       fill("white")
       
     }
      else{
       if(frameCount%1===0){
        textSize(30)
        fill("red")
        text("You need 100 Coins",250,450)
        text("Not enough money",250,400)
        
       
       }
     
     
    }
  }


}

if(coin===100||coin>100){
  fill("white")
  noStroke();
  text("costs 100 coins",70,470)
}else{
    fill("red")
    noStroke();
    text("costs 100 coins",70,470)
  
}
  
  continues=createSprite(850,400,300,100)
 continues.visible=false;
 fill("white")
 stroke( "blue")
 strokeWeight(4)
 textSize(30)
  text("Continue>>",continues.x-130,continues.y);
  if(mousePressedOver(continues)){
    car.visible=true;
    invaderGr.setVelocityXEach(-6)
    background1.velocityX=-10;
    sheildValueIncreaser.y=1500
    continues.y=1500
    gameState=PLAY
  }
  if(car.isTouching(shieldGR)){
    sheildTime=sheildTime;
  }
}


if(gameState===START){
  how = createSprite(350,350,200,50);
  how.visible=false;

  
  if(mousePressedOver(how)){
    gameState=INS;

  }

}
if(gameState===INS){
  fill("white")
  stroke("blue")
  strokeWeight(4)
  
  fill("red");
  noStroke();
  textSize(30)
  text("Press right arrow to accelerate car.Control The car using Mouse. Dont Touch Other Cars.",50,150)
  text("Dont Touch Other Cars.",50,200)
  text("Press 'G' to buy extra shield time.",50,250);
  text("Be careful when you are with shield.",50,300);
  text("Don't move the car up and down too fast.",50,350)
  next=createSprite(400,450,250,100);
  next.visible=false
  fill("black")
  stroke("black")
  strokeWeight(2)

  text("CONTINUE>>",next.x-100,next.y)  
  input.hide();
  buttun.hide();
  var name12=input.value();
  if(mousePressedOver(next)){
    gameState=SELECTOR;
  }
}

if(gameState===SELECTOR){
  music1=createSprite(150,300,230,40);
  music1.shapeColor="white";
  music2=createSprite(350,300,200,40);
  music2.shapeColor="white";
  music3=createSprite(150,350,200,40);
  darks=createSprite(200,400,200,40);
  fa=createSprite(600,300,200,50);
  lily=createSprite(600,400,100,50);
  on=createSprite(800,400,200,50);
  nomusic=createSprite(325,355,200,40)
  music3.shapeColor="white";
  darks.shapeColor="white";
  car.visible=false;
  music1.visible=false;
  music2.visible=false;
  music3.visible=false;
  nomusic.visible=false;
  darks.visible=false;
  fa.visible=false;
  lily.visible=false;
  on.visible=false;
  textSize(40)
  input.hide();
buttun.hide();
title.hide();


 


  textSize(30)
  fill("white")
  noStroke();
  text("(ASTRONOMIA)",music1.x-110,music1.y+10);
  text("(FADED)",fa.x-40,fa.y);
  text("(LILY)",lily.x-30,lily.y);
  text("(SPECTRE)",music2.x-60,music2.y+10);
  text("(ALONE)",music3.x-50,music3.y+10);
  text("(NONE)",nomusic.x-10,nomusic.y+5)
  text("(DARKSIDE)",darks.x-75,darks.y+5)
  text("(ON MY WAY)",on.x-100,on.y)
  stroke("white");
  textSize(30)
  stroke("white")
  strokeWeight(2)
  text("Press which music you need",100,100);

  if(frameCount%1===0){
  if(mousePressedOver(music1)){
    
    song.play();
    
    gameState=PLAY;
    
  }
}

if(frameCount%1===0){
  if(mousePressedOver(on)){
    
    onmy.play();
    
    gameState=PLAY;
    
  }
}

if(frameCount%1===0){
  if(mousePressedOver(fa)){
    
    fad.play();
   
    gameState=PLAY;
    
  }
}

if(frameCount%1===0){
  if(mousePressedOver(lily)){
    
    lil.play();
   
    gameState=PLAY;
    
  }
}

if(frameCount%1===0){
  if(mousePressedOver(music2)){
    
    spec.play();
    
    gameState=PLAY;
  
  }
}


if(frameCount%1===0){
  if(mousePressedOver(music3)){
    
    alo.play();
   
    gameState=PLAY;
  
  }
}
if(frameCount%1===0){
  if(mousePressedOver(darks)){
    
    dar.play();
   
    gameState=PLAY;
  
  }
}

if(frameCount%1===0){
  if(mousePressedOver(nomusic)){
    gameState=PLAY;
  
  }
}
  
}


}

function spawnObstacles(){
  
    car1 = createSprite(700,Math.round(random(50,450)));
    car1.velocityX = -6
    car1.scale=0.5
    
    car1.addImage(carIm3)
    invaderGr.add(car1)   
    car1.setCollider("rectangle",0,0,car1.width+100,car1.height-8);
    if(frameCount%25===0){
      car1.velocityX+=-3
    }

      
   
    
    
  }
  function spawnObstacles1(){
  
    car2 = createSprite(700,Math.round(random(50,450)));
    car2.velocityX = -6
    car2.scale=0.5
    
    car2.setCollider("rectangle",0,0,car2.width+200,car2.height+35);
    car2.addImage(carIm31)
    invaderGr.add(car2)
    car2.collide(invaderGr);
    if(frameCount%2===0){
      car2.velocityX+=-10
    }


      
   
    
    
  }
  function spawnShield(){
  
    shield=createSprite(+2500,Math.round(random(50,450)));
    shield.velocityX = -10
    shield.scale=0.1
    shield.addImage(sh)
    shieldGR.add(shield)
    invaderGr.collide(invaderGr);



      
   
    
    
  }
 function text(){
   text("NEXT>>",200,100)

  }
  function reset(){
    if(keyDown("space")||keyDown("r")){
      gameState=SELECTOR
      score=000
      car.scale=0.6;
      sheildTime=5
    }
  }
  function updateCoin(){
    var contestantIndex = "player"+pcount;
   
    
    database.ref(contestantIndex).set({
      
     
      
      
    });1
}
function updateDistance(){
  var contestantIndex = "player"+pcount
  let name=coin;
  database.ref(contestantIndex).set({
    Coin:name,
    distance:score,
    Lap:Lap
    
    
  });
  
}

