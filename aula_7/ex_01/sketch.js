

var t, n, numLinhas, numColunas, escolheForma;

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  frameRate (1);
}


function draw() 
{

  background(255);

  t = width/10;

  numLinhas = height/t;
  numColunas = width/t;

  noStroke();
  fill(0);
  ellipseMode(CORNER);

  for (var x = 0; x<numColunas; x++)
  {
    for (var y = 0; y<numLinhas; y++)
    {
      escolheForma = int(random(1,3));
      
      if (escolheForma === 2)
      {
        ellipse (x*t, y*t, t, t);
      }

      if (escolheForma === 1)
      {
        rect (x*t, y*t, t, t);
      }
    }  
  }
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
