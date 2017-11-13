
var n, t;

function setup() 
{
  createCanvas (windowWidth, windowHeight);
n = 100;

  
}

function draw() 
{
  t = width/n;

  for (var x = 0; x<width; x += t)
  {
    for (var y = 0; y<height; y += t)
    {
      fill(random(255));
      noStroke();
      rect(x, y, t, t);
    }  
  }
}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
