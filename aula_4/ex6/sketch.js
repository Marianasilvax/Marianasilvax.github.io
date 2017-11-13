
var frase;
function setup() 
{
  createCanvas (windowWidth, windowHeight);

  frase = "SOCORRO";
}


function draw() 
{
  background(255, 50);
  textStyle(ITALIC);
  textAlign(CENTER, CENTER);
  textFont("Kumar One Outline");
  textSize (50);
  text(frase,random(width),random(height));
  
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
