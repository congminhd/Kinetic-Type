var para1=["Movement is static because it is the only immutable thing. Is that right?", "Yes? No?", "The only certainty is that movement, change and metamorphosis exist. Is that right?", "Yes? No?", "So-called immobile objects exist only in movement. Is that right?", "Yes? No?"];
var para2=["Movement is the only static, final, permanent and certain thing. Is that right?", "Yes? No?", "Immutability does not exist. All is movement. Is that right?", "Yes? No?"];
var para3=["Immobile, certain and permanent things, ideas, works and beliefs change, transform and disintegrate. Is that right?", "Yes? No?", "Immobile objects are snapshots of a movement whose existence we refuse to accept, because we our- selves are only an instant in the great movement. Is that right?", "Yes? No?"];
var para4=["We are not simply voyaging on strange new seas of thought but plowing the old Homeric ones as well and trying to make sense of both as one whole and comprehensible textual world. Is that right?", "Yes? No?", "We cannot exist, after all, only by breathing out abstraction, alphabets which do not think; nor only by breathing in animation, alphabets which do; but only by respiration, the life-giving oscillation of the two. That oscillation is what’s next for text. Is that right?", "Yes? No?"];
var fontsize;
var font;
var desktop=true;
var next=false;
var sentences=[];

function preload(){
  font=loadFont("data/HelveticaNowTextBold.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fontsize=int(width/70);
  textSize(fontsize);
  textFont(font);
  textAlign(LEFT, CENTER);
  if (width<height){
    desktop=false;
  }
  if (!desktop){
    // put mobile stuff here
  }
  for (let i=0; i<para1.length; i++){
    //text(para1[i], 0.1*width, 0.1*height*(i+1), 0.35*width, 0.2*height);
    sentences.push(new Sentence(para1[i], 0.1*width, 0.075*height*(i+1), 0.35*width, 0.08*height));
  }
  for (let i=0; i<para2.length; i++){
    //text(para1[i], 0.1*width, 0.1*height*(i+1), 0.35*width, 0.2*height);
    sentences.push(new Sentence(para2[i], 0.55*width, 0.07*height, 0.35*width, 0.15*height*(i+1)));
  }
  for (let i=0; i<para3.length; i++){
    //text(para1[i], 0.1*width, 0.1*height*(i+1), 0.35*width, 0.2*height);
    sentences.push(new Sentence(para3[i], 0.1*width, 0.48*height, 0.35*width, 0.2*height*(i+1)));
  }
  for (let i=0; i<para4.length; i++){
    //text(para1[i], 0.1*width, 0.1*height*(i+1), 0.35*width, 0.2*height);
    sentences.push(new Sentence(para4[i], 0.55*width, 0.37*height, 0.35*width, 0.23*height*(i+1)));
  }
}

class Sentence{
  constructor(sentence, x, y, w, h){
    this.sentence=sentence;
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
  }
  move(){
    this.x+=random(-0.5,0.5);
    this.y+=random(-0.5,0.5);
  }
  display(){
    text(this.sentence, this.x, this.y, this.w, this.h);
  } 
}

function draw() {
  background(0);

  fill(mouseX/5, mouseY/5, mouseX+mouseY/8);

  for (let i=0; i<sentences.length; i++){
    sentences[i].move();
    sentences[i].display();
  }
  //text(para2, 0.55*width, 0.1*height, 0.35*width, 0.8*height);
  fill(mouseX/5, mouseY/5, mouseX+mouseY/8);
  noStroke();
  circle (0.9*width, 0.9*height, 50);
  push();
  textAlign(LEFT, TOP);
  //textMode(CENTER);
  text("Return", 0.894*width-25, 0.93*height, 0.1*width, 0.1*height);
  pop();
  let distance=(dist(0.9*width, 0.9*height, mouseX, mouseY));
}
if (distance<25){
  push();
  fill(255,0,0);
  circle (0.9*width, 0.9*height, 50);
  pop();

}
