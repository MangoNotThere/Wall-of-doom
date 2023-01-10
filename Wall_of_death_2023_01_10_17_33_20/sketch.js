let movingUp = false;
let movingDown = false;

let ypos = 300;
let pSpeed = 5;
let score = 0;
//wall y
let wY

let frame
let sec

//wall mover
let wM=0;
let wallSpeed = 5
let gameOver=false
function setup() {
  frameRate(60);
  createCanvas(800, 800);
  wY=random(50,800)
}

function draw() {
  if(!gameOver){
  background(220);
  stroke(2);
  fill(255);
  rect(300, ypos, 50, 50);
  fill(255, 0, 0);
  noStroke();
  rect(0, 0, 150, 800);
  fill(0);
  rect(300, 0, 200, 50);
  fill(255);
  textSize(40);
  text("" + score, 310, 5, 490, 49);
  fill(0)
  rect(wM,wY,50,200)
  }
  if(wM>-50){
    wM-=wallSpeed
  }else{
    wall()
  }

  // update moving character

  if (movingUp) {
    ypos -= pSpeed;
  }
  if (movingDown) {
    ypos += pSpeed;
  }
  
  if(!gameOver){
  frame+=1
  }
  
  if(frame===60&&!gameOver){
    sec+=1
    
  }
  
  if(ypos-25>wY&&ypos+25<wY+200&&300<wM+50&&300>=wM){
     gameOver=true
    fill(0,0,0,50)  
    rect(0,0,800,800)
    fill(255,0,0)
    noStroke()
    text("Game Over",300,269)
    rect(300, 0, 200, 50);
    fill(255);
    textSize(40);
    text("" + score, 310, 5, 490, 49);
     }
}

function keyPressed() {
  if (key == "w") {
    movingUp = true;
    
  }
  if (key == "d" || key === "s") {
    movingDown = true;
    
  }
}

function keyReleased() {
  if (key == "w") {
   
    movingUp = false;
  }
  if (key == "d" || key === "s") {
    
    movingDown = false;
  }
}
wall=function(){
  if(!gameOver){score+=1
  wallSpeed+=0.25
  wY=random(50,800)
    wM=800
    fill(0)
    rect(wM,wY,50,400)
               }
}
