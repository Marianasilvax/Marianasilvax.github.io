
var x, y, t;
function setup() 
{
  createCanvas (windowWidth, windowHeight);
  
}


function draw() 
{
  x = width/2;
  y = width/2;
  t = width/2;

  // line (x-(t/2), 0, x-(t/2), height);

  if ( 
    mouseX > x - (t/2) && mouseX <= x + (t/2) &&
    mouseY > y - (t/2) && mouseY <= y + (t/2) && mouseIsPressed === true) 

  {
    fill (0, 255, 0);
  }
  else
  {
    fill (255, 0, 0);
  }

  rectMode (CENTER); 
  rect(x, y, t, t);
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
