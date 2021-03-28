var poolTable, cue, cueBall
var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10, ball11, ball12, ball13, ball14, ball15;
var edges;
var gameState = "play";
var balls = []
var poolTableImage, cueImage, cueBallImage, blackBallImage, redBallImage, yellowBallImage;
var cushion1, cushion2, cushion3, cushion5, cushion6;
var pocket1, pocket2, pocket3, pocket4, pocket5, pocket6;
var timeFlag = "stop", time = 150

function preload() {
  poolTableImage = loadImage("assets/poolTable.png");
  cueImage = loadImage("assets/cue.png");
  cueBallImage = loadImage("assets/cueBall.png");
  blackBallImage = loadImage("assets/blackBall.png");
  redBallImage = loadImage("assets/redBall.png");
  yellowBallImage = loadImage("assets/yellowBall.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  console.log(displayHeight)

  edges = createEdgeSprites();
  //chang emade for pool tabe sprite
  poolTable = createSprite(width / 2, height / 2);
  cue = createSprite(180, 368, 350, 5);
  cueBall = createSprite(520, 450, 20, 20);
  //ball1 = createSprite(972, 368, 20, 20);
 //ball2 = createSprite(1006, 348, 20, 20);
  //ball3 = createSprite(1006, 388, 20, 20);
  //ball4 = createSprite(1040, 328, 20, 20);
  
  //ball5 = createSprite(1040, 368, 20, 20);
  //ball6 = createSprite(1040, 408, 20, 20);
  //ball7 = createSprite(1074, 308, 20, 20);
  //ball8 = createSprite(1074, 348, 20, 20);
  //ball9 = createSprite(1074, 388, 20, 20);
  //ball10 = createSprite(1074, 428, 20, 20);
  //ball11 = createSprite(1108, 288, 20, 20);
 // ball12 = createSprite(1108, 328, 20, 20);
 // ball13 = createSprite(1108, 368, 20, 20);
 // ball14 = createSprite(1108, 408, 20, 20);
//  ball15 = createSprite(1108, 448, 20, 20);

  ball1 = createSprite(862, 450, 20, 20);
  ball2 = createSprite(890, 436, 20, 20);
  ball3 = createSprite(890, 464, 20, 20);
  ball4 = createSprite(918, 422, 20, 20);
  ball5 = createSprite(918, 450, 20, 20);
  ball6 = createSprite(918, 478, 20, 20);
  ball7 = createSprite(946, 408, 20, 20);
  ball8 = createSprite(946, 436, 20, 20);
  ball9 = createSprite(946, 464, 20, 20);
  ball10 = createSprite(946, 492, 20, 20);
  ball11 = createSprite(974, 394, 20, 20);
  ball12 = createSprite(974, 422, 20, 20);
  ball13 = createSprite(974, 450, 20, 20);
  ball14 = createSprite(974, 478, 20, 20);
  ball15 = createSprite(974, 506, 20, 20);









  poolTable.addImage(poolTableImage);
  cue.addImage(cueImage);
  cueBall.addImage(cueBallImage);
  ball1.addImage(redBallImage);
  ball2.addImage(yellowBallImage);
  ball3.addImage(yellowBallImage);
  ball4.addImage(redBallImage);
  ball5.addImage(blackBallImage);
  ball6.addImage(redBallImage);
  ball7.addImage(redBallImage);
  ball8.addImage(yellowBallImage);
  ball9.addImage(redBallImage);
  ball10.addImage(yellowBallImage);
  ball11.addImage(yellowBallImage);
  ball12.addImage(redBallImage);
  ball13.addImage(yellowBallImage);
  ball14.addImage(redBallImage);
  ball15.addImage(redBallImage);

  

  //change made made chusions
  cushion1 = createSprite(322, height/2, 10, 330);
  cushion2 = createSprite(1119, height/2, 10, 330);
  cushion3 = createSprite(528, 248, 338, 10);
  cushion4 = createSprite(912, 248, 338, 10);
  cushion5 = createSprite(528, 651, 338, 10);
  cushion6 = createSprite(913, 651, 338, 10);

  //pocckesst also my change made
  pocket1 = createSprite(325, 250, 20, 20);
  pocket2 = createSprite(325, 650, 20, 20);
  pocket3 = createSprite(720, 240, 20, 20);
  pocket4 = createSprite(720, 660, 20, 20);
  pocket5 = createSprite(1115, 250, 20, 20);
  pocket6 = createSprite(1115, 650, 20, 20);

  pocket1.visible = false
  pocket2.visible = false
  pocket3.visible = false
  pocket4.visible = false
  pocket5.visible = false
  pocket6.visible = false


  cushion1.visible = false;
  cushion2.visible = false;
  cushion3.visible = false;
  cushion4.visible = false;
  cushion5.visible = false;
  cushion6.visible = false;

  poolTable.scale = 1.1;
  cue.scale = 0.52;

  cue.setCollider('rectangle', 460, 0, 5, 5);
  cueBall.setCollider('rectangle', 0, 0, 40, 40, 270);
  
  ball1.setCollider('circle', 0, 0, 19);
  ball2.setCollider('circle', 0, 0, 19);
  ball3.setCollider('circle', 0, 0, 19);
  ball4.setCollider('circle', 0, 0, 19);
  ball5.setCollider('circle', 0, 0, 19);
  ball6.setCollider('circle', 0, 0, 19);
  ball7.setCollider('circle', 0, 0, 19);
  ball8.setCollider('circle', 0, 0, 19);
  ball9.setCollider('circle', 0, 0, 19);
  ball10.setCollider('circle', 0, 0, 19);
  ball11.setCollider('circle', 0, 0, 19);
  ball12.setCollider('circle', 0, 0, 19);
  ball13.setCollider('circle', 0, 0, 19);
  ball14.setCollider('circle', 0, 0, 19);
  ball15.setCollider('circle', 0, 0, 19);

  //balls scaled down chagne made
  cueBall.scale = 0.7
  ball1.scale = 0.7
  ball2.scale = 0.7
  ball3.scale = 0.7
  ball4.scale = 0.7
  ball5.scale = 0.7
  ball6.scale = 0.7
  ball7.scale = 0.7
  ball8.scale = 0.7
  ball9.scale = 0.7
  ball10.scale = 0.7
  ball11.scale = 0.7
  ball12.scale = 0.7
  ball13.scale = 0.7
  ball14.scale = 0.7
  ball15.scale = 0.7

  balls = [ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10, ball11, ball12, ball13, ball14, ball15]

}

function draw() {

  // new change made by me
  for (var i = 0; i < balls.length; i++) {
    if (balls[i].isTouching(pocket1) || balls[i].isTouching(pocket2) || balls[i].isTouching(pocket3) || balls[i].isTouching(pocket4) || balls[i].isTouching(pocket5) || balls[i].isTouching(pocket6)) {
      balls[i].destroy();
    }
  }

  cueBall.bounceOff(cushion1);
  cueBall.bounceOff(cushion2);
  cueBall.bounceOff(cushion3);
  cueBall.bounceOff(cushion4);
  cueBall.bounceOff(cushion5);
  cueBall.bounceOff(cushion6);

  background("white");

  cue.x = mouseX;
  cue.y = mouseY;

  if (gameState === "play") {
    cue.pointTo(cueBall.x, cueBall.y);
  }

  if (cue.isTouching(cueBall) && timeFlag === "stop") {

    cueBall.setSpeedAndDirection(-20);
    gameState = "end";
    timeFlag = "start";
  }

  cueBall.pointTo(cue.x, cue.y);

  if (timeFlag === "start") {
    time--;

    cue.visible = false;
  }

  if (time === 0) {
    timeFlag = "stop";
    time = 150;
  }

  if (timeFlag === "stop") {
    for (var i = 0; i < balls.length; i++) {
      balls[i].setVelocity(0, 0);
      cueBall.setVelocity(0, 0);
      cue.visible = true;
      cue.pointTo(cueBall.x, cueBall.y);

    }
  }

  for (var i = 0; i < balls.length; i++) {
    for (var j = i + 1; j < balls.length; j++) {
      balls[i].bounce(balls[j]);
      balls[i].bounceOff(cushion1);
      balls[i].bounceOff(cushion2);
      balls[i].bounceOff(cushion3);
      balls[i].bounceOff(cushion4);
      balls[i].bounceOff(cushion5);
      balls[i].bounceOff(cushion6);
      cueBall.bounce(balls[i])
    }
  }

  if (cueBall.isTouching(pocket1) || cueBall.isTouching(pocket2) || cueBall.isTouching(pocket3) || cueBall.isTouching(pocket4) || cueBall.isTouching(pocket5) || cueBall.isTouching(pocket6)) {
    cueBall.x = 520;
    cueBall.y = 450;
    cueBall.setVelocity(0, 0);
  }

  if (cueBall.x < 0 || cueBall.x > width || cueBall.y > height || cueBall.y < 0) {
    cueBall.x = 520;
    cueBall.y = 450;
    cueBall.setVelocity(0, 0);
  }

  drawSprites();
}

