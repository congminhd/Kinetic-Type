var para1="Movement is static because it is the only immutable thing. Is that right? Yes? No? The only certainty is that movement, change and metamorphosis exist. Is that right? Yes? No? So-called immobile objects exist only in movement. Is that right? Yes? No? Immobile, certain and permanent things, ideas, works and beliefs change, transform and disintegrate. Is that right? Yes? No? Immobile objects are snapshots of a movement whose existence we refuse to accept, because we our- selves are only an instant in the great movement. Is that right? Yes? No? Movement is the only static, final, permanent and certain thing. Is that right? Yes? No?";
var para2="Immutability does not exist. All is movement. Is that right? Yes? No? We are not simply voyaging on strange new seas of thought but plowing the old Homeric ones as well and trying to make sense of both as one whole and comprehensible textual world. Is that right? Yes? No? We cannot exist, after all, only by breathing out abstraction, alphabets which do not think; nor only by breathing in animation, alphabets which do; but only by respiration, the life-giving oscillation of the two. That oscillation is what’s next for text. Is that right? Yes? No?";
var fontsize;
var font;
var desktop=true;
var next=false;
function setup() {
createCanvas(windowWidth, windowHeight);
fontsize=int(width/70);
textSize(fontsize);
textFont(font);
if (width<height){
  desktop=false;
}
if (!desktop){
  // put mobile stuff here
}
}
function preload(){
  font=loadFont("data/HelveticaNowTextBold.otf");
}
function draw() {
background(0);
textAlign(CENTER, CENTER);
fill(mouseX/5, mouseY/5, mouseX+mouseY/8);
text(para1, 0.1*width, 0.1*height, 0.35*width, 0.8*height);
text(para2, 0.55*width, 0.1*height, 0.35*width, 0.8*height);
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
