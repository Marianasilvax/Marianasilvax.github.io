
var x, y, t, v, factorCrescimento, xAnterior, yAnterior;
function setup() 
{
  createCanvas (windowWidth, windowHeight);

  x = width/2;
  y = height/2;



  v = 1;
  t = v;
  factorCrescimento = 2;
  
}


function draw() 
{
  if (frameCount%50);
  //background(random);
  {
    v = random(-v, v);
  
  }
  x += v;
  y += v;

  /*if (x <= 0) x+=t;
  if (x >= width) x-=t;
  if (y <= 0) y+=t;
  if (y >= height) y-=t;

  if (t > 30 || t < 0 )factorCrescimento *=- 1;

  t += factorCrescimento;*/



  noFill();
  strokeWeight(2);
  stroke(random(255), random(255),random(255));
  point(x, y);


}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
