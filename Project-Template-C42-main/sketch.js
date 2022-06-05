var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;

var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;

var redBubbleGroup, redBubbleGroup, bulletGroup;


var life =5;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
  
  heading= createElement("h1");
  scoreboard= createElement("h1");
  level= createElement("h1");
}

function draw() {
  background("#BDA297");
  
  heading.html("Life: "+life)
  heading.style('color:red'); 
  heading.position(150,20)

  scoreboard.html("Score: "+score)
  scoreboard.style('color:red'); 
  scoreboard.position(width-200,20)

  if(gameState === 1){
  level.html("LEVEL 1")
  level.style('color:white'); 
  level.position(width/2,20)
  }

  if(gameState === 2){
  level.html("LEVEL 2")
  level.style('color:white'); 
  level.position(width/2,20)
  }

  if(gameState === 3){
  level.html("LEVEL 3")
  level.style('color:white'); 
  level.position(width/2,20)
  }

  if(gameState === 4){
  level.html("LEVEL 4")
  level.style('color:white'); 
  level.position(width/2,20)
  }

  if(gameState === 5){
  level.html("LEVEL 5")
  level.style('color:white'); 
  level.position(width/2,20)
  }

  if(gameState === 6){
    level.html("LEVEL 6")
    level.style('color:white'); 
    level.position(width/2,20)
    }

//LEVEL 1

  if(gameState===1){

    //textSize(30);
    //fill(255);
    //text("LEVEL 1",width-700,30);

    if (keyIsDown(UP_ARROW)) {
      gun.y = gun.y - 10;
    }

    if (keyIsDown(DOWN_ARROW)) {
      gun.y = gun.y + 10;
    }

    if (frameCount % 80 === 0) {
      drawblueBubble();
    }

    if (frameCount % 100 === 0) {
      drawredBubble();
    }

    if(keyDown("space")){
      shootBullet();
    }

    if (blueBubbleGroup.collide(backBoard)){
      handleGameover(blueBubbleGroup);
    }
    
    if (redBubbleGroup.collide(backBoard)) {
      handleGameover(redBubbleGroup);
    }
    
    /*if(blueBubbleGroup.(bulletGroup)){
      handleBubbleCollision(blueBubbleGroup);
    }*/

    /*if(blueBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision();
    }*/
    
    /*if(blueBubbleGroup.collide()){
      handleBubbleCollision(blueBubbleGroup);
    }*/
    
    if(blueBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision(blueBubbleGroup);
    }

    if(redBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision(redBubbleGroup);
    }

    drawSprites();
  }
    if(score === 10){
      gameState = 2;
      console.log(gameState);
    }
  
    //LEVEL 2

if(gameState === 2){

  //textSize(30);
    //fill(255);
    //text("LEVEL 2",width-700,30);

  if (keyIsDown(UP_ARROW)) {
    gun.y = gun.y - 15;
  }

  if (keyIsDown(DOWN_ARROW)) {
    gun.y = gun.y + 15;
  }

  if (frameCount % 80 === 0) {
    drawblueBubble();
  }

  if (frameCount % 100 === 0) {
    drawredBubble();
  }

  if(keyDown("space")){
    shootBullet();
  }

  if (blueBubbleGroup.collide(backBoard)){
    handleGameover(blueBubbleGroup);
  }
  
  if (redBubbleGroup.collide(backBoard)) {
    handleGameover(redBubbleGroup);
  }
  
  /*if(blueBubbleGroup.(bulletGroup)){
    handleBubbleCollision(blueBubbleGroup);
  }*/

  /*if(blueBubbleGroup.collide(bulletGroup)){
    handleBubbleCollision();
  }*/
  
  /*if(blueBubbleGroup.collide()){
    handleBubbleCollision(blueBubbleGroup);
  }*/
  
  if(blueBubbleGroup.collide(bulletGroup)){
    handleBubbleCollision(blueBubbleGroup);
  }

  if(redBubbleGroup.collide(bulletGroup)){
    handleBubbleCollision(redBubbleGroup);
  }

  drawSprites();
}

if(score === 25){
  gameState = 3;
  console.log(gameState);
}

//LEVEL 3

if(gameState === 3){

  //textSize(30);
    //fill(255);
    //text("LEVEL 3",width-700,30);

  if (keyIsDown(UP_ARROW)) {
    gun.y = gun.y - 20;
  }

  if (keyIsDown(DOWN_ARROW)) {
    gun.y = gun.y + 20;
  }

  if (frameCount % 80 === 0) {
    drawblueBubble();
  }

  if (frameCount % 100 === 0) {
    drawredBubble();
  }

  if(keyDown("space")){
    shootBullet();
  }

  if (blueBubbleGroup.collide(backBoard)){
    handleGameover(blueBubbleGroup);
  }
  
  if (redBubbleGroup.collide(backBoard)) {
    handleGameover(redBubbleGroup);
  }
  
  /*if(blueBubbleGroup.(bulletGroup)){
    handleBubbleCollision(blueBubbleGroup);
  }*/

  /*if(blueBubbleGroup.collide(bulletGroup)){
    handleBubbleCollision();
  }*/
  
  /*if(blueBubbleGroup.collide()){
    handleBubbleCollision(blueBubbleGroup);
  }*/
  
  if(blueBubbleGroup.collide(bulletGroup)){
    handleBubbleCollision(blueBubbleGroup);
  }

  if(redBubbleGroup.collide(bulletGroup)){
    handleBubbleCollision(redBubbleGroup);
  }

  drawSprites();
}
if(score === 40){
  gameState = 4;
  console.log(gameState);
}

//LEVEL 4

if(gameState===4){

  //textSize(30);
  //fill(255);
  //text("LEVEL 1",width-700,30);

  if (keyIsDown(UP_ARROW)) {
    gun.y = gun.y - 25;
  }

  if (keyIsDown(DOWN_ARROW)) {
    gun.y = gun.y + 25;
  }

  if (frameCount % 80 === 0) {
    drawblueBubble();
  }

  if (frameCount % 100 === 0) {
    drawredBubble();
  }

  if(keyDown("space")){
    shootBullet();
  }

  if (blueBubbleGroup.collide(backBoard)){
    handleGameover(blueBubbleGroup);
  }
  
  if (redBubbleGroup.collide(backBoard)) {
    handleGameover(redBubbleGroup);
  }
  
  /*if(blueBubbleGroup.(bulletGroup)){
    handleBubbleCollision(blueBubbleGroup);
  }*/

  /*if(blueBubbleGroup.collide(bulletGroup)){
    handleBubbleCollision();
  }*/
  
  /*if(blueBubbleGroup.collide()){
    handleBubbleCollision(blueBubbleGroup);
  }*/
  
  if(blueBubbleGroup.collide(bulletGroup)){
    handleBubbleCollision(blueBubbleGroup);
  }

  if(redBubbleGroup.collide(bulletGroup)){
    handleBubbleCollision(redBubbleGroup);
  }

  drawSprites();
}
if(score === 55){
  gameState = 5;
  console.log(gameState);
}

//LEVEL 5

if(gameState===5){

  //textSize(30);
  //fill(255);
  //text("LEVEL 1",width-700,30);

  if (keyIsDown(UP_ARROW)) {
    gun.y = gun.y - 30;
  }

  if (keyIsDown(DOWN_ARROW)) {
    gun.y = gun.y + 30;
  }

  if (frameCount % 80 === 0) {
    drawblueBubble();
  }

  if (frameCount % 100 === 0) {
    drawredBubble();
  }

  if(keyDown("space")){
    shootBullet();
  }

  if (blueBubbleGroup.collide(backBoard)){
    handleGameover(blueBubbleGroup);
  }
  
  if (redBubbleGroup.collide(backBoard)) {
    handleGameover(redBubbleGroup);
  }
  
  /*if(blueBubbleGroup.(bulletGroup)){
    handleBubbleCollision(blueBubbleGroup);
  }*/

  /*if(blueBubbleGroup.collide(bulletGroup)){
    handleBubbleCollision();
  }*/
  
  /*if(blueBubbleGroup.collide()){
    handleBubbleCollision(blueBubbleGroup);
  }*/
  
  if(blueBubbleGroup.collide(bulletGroup)){
    handleBubbleCollision(blueBubbleGroup);
  }

  if(redBubbleGroup.collide(bulletGroup)){
    handleBubbleCollision(redBubbleGroup);
  }

  drawSprites();
}
if(score === 70){
  gameState = 6;
  console.log(gameState);
}

//LEVEL 6

if(gameState===6){

  //textSize(30);
  //fill(255);
  //text("LEVEL 1",width-700,30);

  if (keyIsDown(UP_ARROW)) {
    gun.y = gun.y - 35;
  }

  if (keyIsDown(DOWN_ARROW)) {
    gun.y = gun.y + 35;
  }

  if (frameCount % 80 === 0) {
    drawblueBubble();
  }

  if (frameCount % 100 === 0) {
    drawredBubble();
  }

  if(keyDown("space")){
    shootBullet();
  }

  if (blueBubbleGroup.collide(backBoard)){
    handleGameover(blueBubbleGroup);
  }
  
  if (redBubbleGroup.collide(backBoard)) {
    handleGameover(redBubbleGroup);
  }
  
  /*if(blueBubbleGroup.(bulletGroup)){
    handleBubbleCollision(blueBubbleGroup);
  }*/

  /*if(blueBubbleGroup.collide(bulletGroup)){
    handleBubbleCollision();
  }*/
  
  /*if(blueBubbleGroup.collide()){
    handleBubbleCollision(blueBubbleGroup);
  }*/
  
  if(blueBubbleGroup.collide(bulletGroup)){
    handleBubbleCollision(blueBubbleGroup);
  }

  if(redBubbleGroup.collide(bulletGroup)){
    handleBubbleCollision(redBubbleGroup);
  }

  drawSprites();
}
}

function drawblueBubble(){
  bluebubble = createSprite(windowWidth,random(windowHeight - 50,windowHeight - 550),40,40);
  bluebubble.addImage(blueBubbleImg);
  bluebubble.scale = 0.1;
  bluebubble.velocityX = -8;
  bluebubble.lifetime = 400;
  blueBubbleGroup.add(bluebubble);

  if(gameState === 2){
    bluebubble.velocityX = -11;
  }

  if(gameState === 3){
    bluebubble.velocityX = -14;
  }

  if(gameState === 4){
    bluebubble.velocityX = -17;
  }

  if(gameState === 5){
    bluebubble.velocityX = -20;
  }

  if(gameState === 6){
    bluebubble.velocityX = -23;
  }
}

function drawredBubble(){
  redbubble = createSprite(windowWidth,random(windowHeight - 50,windowHeight - 550),40,40);
  redbubble.addImage(redBubbleImg);
  redbubble.scale = 0.1;
  redbubble.velocityX = -8;
  redbubble.lifetime = 400;
  redBubbleGroup.add(redbubble);

  if(gameState === 2){
    redbubble.velocityX = -11;
  }

  if(gameState === 3){
    redbubble.velocityX = -14;
  }

  if(gameState === 4){
    redbubble.velocityX = -17;
  }

  if(gameState === 5){
    redbubble.velocityX = -20;
  }

  if(gameState === 6){
    redbubble.velocityX = -23;
  }
}

function shootBullet(){
  bullet= createSprite(150, width/2, 50,20)
  bullet.y= gun.y-20
  bullet.addImage(bulletImg)
  bullet.scale=0.12
  bullet.velocityX= 7 
  bulletGroup.add(bullet)

  if(gameState === 2){
    bullet.velocityX = 10;
  }

  if(gameState === 3){
    bullet.velocityX = 13;
  }

  if(gameState === 4){
    bullet.velocityX = 16;
  }

  if(gameState === 5){
    bullet.velocityX = 19;

    bullet2= createSprite(190, width/2, 50,20)
    bullet2.y= gun.y-35
    bullet2.addImage(bulletImg)
    bullet2.scale=0.12
    bullet2.velocityX= 19
    bulletGroup.add(bullet2)
  }

  if(gameState === 6){
    bullet.velocityX = 22;

    bullet2= createSprite(190, width/2, 50,20)
    bullet2.y= gun.y-35
    bullet2.addImage(bulletImg)
    bullet2.scale=0.12
    bullet2.velocityX= 22
    bulletGroup.add(bullet2)
    
  }

}

function handleBubbleCollision(bubbleGroup){
    if (life > 0) {
       score=score+1;
    }

     blast= createSprite(bullet.x+60, bullet.y, 50,50);
    blast.addImage(blastImg) 

    /* blast= sprite(bullet.x+60, bullet.y, 50,50);
    blast.addImage(blastImg) */

    /* blast= createSprite(bullet.x+60, bullet.y, 50,50);
    blast.add(blastImg) */

    /* blast= createSprite(bullet.x+60, bullet.y, 50,50);
    image(blastImg) */
    
    blast.scale=0.3
    blast.life=20
    bulletGroup.destroyEach()
    bubbleGroup.destroyEach()
}

function handleGameover(bubbleGroup){
  
    life=life-1;
    bubbleGroup.destroyEach();
    

    if (life === 0) {
      gameState=8
      
      swal({
        title: `Game Over`,
        text: "Oops you lost the game....!!!",
        text: "Your Score is " + score,
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
        imageSize: "100x100",
        confirmButtonText: "Thanks For Playing"
      });
    }
  
}