var test =0;

var img1 = test;
var img2 = test; // Declare variable 'img'.
var img3 = test;

function setup() {
  createCanvas(1000, 700);
  img1 = loadImage("img/1.jpg");
  img2 = loadImage("img/2.jpg");
  img3 = loadImage("img/3.jpg");
  img4 = loadImage("img/4.jpg");
  img5 = loadImage("img/5.jpg");
  font = loadFont("img/earwig factory rg.ttf");
  background(255,255,255);

}


function draw() {
  var test= Math.floor(Math.random()* (6 - 1) + 1)
  fill(255);
  textSize(40);
  textFont(font,55);
  text("We Have Your Son", 500,300);

  if(test > 5)
  {
    test = 0;
  }

  println(test);
  if (test == 1){
    println(test);
    image(img1, mouseX, mouseY);

  }
  if (test == 2){
    println(test);
    image(img2, mouseX, mouseY);

  }
  if (test == 3){
    println(test);
    image(img3, mouseX, mouseY);
  }
  if (test == 4){
    println(test);
    image(img4, mouseX, mouseY);

  }
  else
    println(test);



}
