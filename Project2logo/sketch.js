var lineheight = 110;
var start = false;
var growth = .5;


function setup() {
  createCanvas(440, 420);
  textSize(25);
  textFont('Helvetica');
}

function draw() {
  background(250);
  line(190, lineheight, 190, 170);
  arc(190, 160, 100, 100, radians(320), radians(220));

  if ((mouseX > 190) && (mouseX < 190 + 100) &&
    (mouseY > 100) && (mouseY < 100 + 100)) {
    if (start == false) {
      lineheight = 130;
      start = true;
    }
    fill(89, 62, 49);
    strokeWeight(0);
    arc(190, 160, 70, 70, radians(0), radians(180));
    stroke(2, 129, 64);
    strokeWeight(7);
    line(190, lineheight, 190, 170);
    fill(2, 129, 64);
    strokeWeight(0);
    text("STARTSEED", 120, 260);

    if (lineheight > 100) {
      lineheight -= growth;
      //add translate and rotate lines here(scale maybe)
      fill(250);
      strokeWeight(7);
      translate(125, -106);
      rotate(radians(45));
      arc(190, 70, 40, 40, 0, PI, OPEN);
      arc(205, 70, 40, 80, PI / 1.5, 3 * PI / 2, OPEN); //leaf vein
      arc(205, 70, 70, 80, PI, 3 * PI / 2, OPEN);
      arc(210, 30, 10, 80, PI / 2, PI, OPEN);


}

    fill(250);
    strokeWeight(7);
    arc(190, 70, 40, 40, 0, PI, OPEN);
    arc(205, 70, 40, 80, PI / 1.5, 3 * PI / 2, OPEN); //leaf vein
    arc(205, 70, 70, 80, PI, 3 * PI / 2, OPEN);
    arc(210, 30, 10, 80, PI / 2, PI, OPEN);


  } else {
    fill(250);
    stroke(0, 0, 0);
    strokeWeight(7);
    lineheight = 110;
    start = false;

  }

}

//  if ((mouseX > 190) && (mouseX < 190+100) &&
//  (mouseY > 100) && (mouseY < 100+100)) {
//  stroke(2,48,32);
//  strokeWeight(5);
//  fill(204);
