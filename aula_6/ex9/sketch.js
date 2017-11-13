

var x1, y1, x2, y2, t, espacamentoHorizontal, numLinhas, linhaActual;

function setup() 
{
  createCanvas (windowWidth, windowHeight);

  t = 20;
  numLinnhas = 100;
  espacamentoHorizontal = width/numLinhas;
}


function draw() 
{
  linhaActual = 0;

  while(linhaActual < numLinhas);
  {
  y1 = height/2 - t/2;
  y2 = height/2 + t/2;

  x1 = espacamentoHorizontal * linhaActual;
  x2 = x1;

  strokeWeight(3);
  line(x1, y1, x2, y2);
 
 
  linhaActual++;
}
}


function windowResized() 


{
  resizeCanvas (windowWidth, windowHeight);
}
