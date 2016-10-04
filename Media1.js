var img;  // Declare variable 'img'.
var test=50;
function setup() {
  createCanvas(720, 400);
  img = loadImage("img/waifu.png");  // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, mouseX, mouseY, img.height/4);
}
