var t, numLinhas, numColunas, escolheForma;


function setup() 
{
  createCanvas (842, 594, SVG);
  frameRate(1);
}


function draw() 
{
  background(94, 25, 192);
  
  t = width/10; //* Dividir o tamanho do canvas em 10 colunas e linhas
  numLinhas = height/t;
  numColunas = width/t;

  
  stroke(158, 237, 75);
  strokeWeight(6);


   for (var x = 0; x<numColunas; x++)
   {
    for (var y = 0; y<numLinhas; y++)
    {
      escolheForma = int (random (1,4)); //* escolher uma das 3 letras
      
      
      if (escolheForma === 1) //* Letra E
      {
        
        line (x*t, y*t, x*t+t, y*t);
        line (x*t, y*t+t/2, x*t+t, y*t+t/2);
        line (x*t, y*t+t, x*t+t, y*t+t);
      }
      
      
      if (escolheForma === 2) //* Letra V
      {
        //x = 0
        //y = 0
        line(x*t, y*t, x*t+t/2, y*t+t);
        line(x*t+t/2, y*t+t, x*t+t, y*t);
        
      }

      if (escolheForma === 3) //* Letra A
      {
        line(x*t, y*t+t, x*t+t/2,y*t);
        line(x*t+t/2, y*t, x*t+t, y*t+t);
      }
    }
  }
}

function keyPressed() 
{
  if (key === " ")
  {
    noLoop();
    save ("evapadrao.svg");
  }  
}
