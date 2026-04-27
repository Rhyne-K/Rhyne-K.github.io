let spaceImg; 

function preload(){
    spaceImg = loadImage("assets/Space_Background.jpg");
}

function setup(){
    createCanvas(500,500);
    angleMode(DEGREES);
}

function draw(){
    background(0);

let cx = width/2;
let cy = height/2;

//Background img
push();
translate(cx, cy);
imageMode(CENTER);
image(spaceImg, 0, 0, 450, 450);
pop();



//time varaibles
let s = second();  //Earth 
let m = minute();  //Mars
let h = hour() % 12;   //Jupiter

//Sun (center) 
push();
translate(cx, cy);
noStroke();
fill(255, 200, 0);
ellipse(0,0,30,30);
pop();

//Earth (1 sec per orbit)
push();
translate(cx, cy);
rotate(map(s, 0, 60, 0, 360)-90);
fill(0, 150, 255);
ellipse(70, 0, 12, 12);
pop();

//Mars (1 minute per orbit)
push();
translate(cx, cy);
rotate(map(m, 0, 60, 0, 360)-90);
fill(255, 80, 50);
ellipse(110, 0, 10, 10);
pop();

//Jupiter (1 hour per orbit)
push();
translate(cx, cy);
rotate(map(h, 0, 12, 0, 360)-90);
fill(200, 150, 100);
ellipse(150, 0, 18, 18);
pop();

//Watch border//
push();
translate(cx, cy);
noFill();
stroke(255);
strokeWeight(6);
ellipse(0, 0, 450, 450);
pop();




}