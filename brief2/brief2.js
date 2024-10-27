var texture;
var para1="Static, static, static! Be static! Be static! Movement is static! Move- ment is static! Movement is static because it is the only immutable thing—the only certainty, the only unchangeable. The only certainty is that movement, change and metamorphosis exist. That is why move- ment is static. So-called immobile objects exist only in movement. Immobile, certain and permanent things, ideas, works and beliefs change, transform and disintegrate . Immobile objects are snapshots of a movement whose existence we refuse to accept, because we our- selves are only an instant in the great movement. Movement is the only static, final, permanent and certain thing. … Immutability does not exist. All is movement.";
var para2="The move from print to digital text precisely models this change. We could, had we been working in a metamorphic display mode rather than a fixed one, have flown into many more radical examples of dynamic text than could be dealt with here. But we have seen enough, perhaps, to suggest that we are not simply voyaging on strange new seas of thought but plowing the old Homeric ones as well and trying to make sense of both as one whole and comprehensible textual world. We cannot exist, after all, only by breathing out abstraction, alphabets which do not think; nor only by breathing in animation, alphabets which do; but only by respiration, the life-giving oscillation of the two. That oscillation is what’s next for text.";
var fontsize;
var font1;
var desktop=true;
var next=false;
function setup() {
createCanvas(windowWidth, windowHeight);
fontsize=int(width/70);
textSize(fontsize);
textFont(font1);
if (width<height){
  desktop=false;
}
if (!desktop){
  // put mobile stuff here
}
}
function preload(){
texture=loadImage("data/texture.jpeg");
font1=loadFont("data/Georgia.ttf");
}


function draw() {
image(texture, 0, 0, width, height, 0, 0, texture.width, texture.height, COVER);
textAlign(LEFT, CENTER);
text(para1, 0.1*width, 0.1*height, 0.35*width, 0.8*height);
text(para2, 0.55*width, 0.1*height, 0.35*width, 0.8*height);
stroke(0, 0, 0);
strokeWeight(1);
line(0.5*width, 0*height, 0.5*width, 1*height);
fill(0);
noStroke();
circle (0.9*width, 0.9*height, 50);
push();
textAlign(LEFT, TOP);
//textMode(CENTER);
text("Next", 0.9*width-25, 0.93*height, 0.1*width, 0.1*height);
pop();
let distance=(dist(0.9*width, 0.9*height, mouseX, mouseY));

if (distance<25){
  push();
  fill(255,0,0);
  circle (0.9*width, 0.9*height, 50);
  pop();
}
}
function mousePressed() {
  let distance=(dist(0.9*width, 0.9*height, mouseX, mouseY));
  if (distance<25) {
    window.open('https://congminhd.github.io/Kinetic-Type/brief2next/');
  }
}
