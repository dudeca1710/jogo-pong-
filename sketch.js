//VARIAVEIS DA BOLINHA
let xbolinha = 200
let ybolinha = 200
let diametro = 40 
let raio= diametro/2

//VARIAVEIS DA VELOCIDADE
let xvelocidade= 6
let yvelocidade= 6

//VARIAVEIS DA RAQUETE
let xraquete = 10
let yraquete = 140
let lraquete = 13
let hraquete= 90
let xraqueteop = 430
let yraqueteop = 140
let velocidadeyop;
let colidiu = false 

//variaveis do placar
let meuspontos = 0
let pontosop = 0

function setup() {
  createCanvas(450,350);
}

function draw() {
  background (0);
  criabolinha ();
  movimentobolinha ();
  colisaoborda ();
  minharaquete ();
  movimentaraquete ();
 colisaoraquete (); 
  criaraqueteop ();
 movimentoraqueteop();
  colisaobolinharaquete();
  criaplacar ();
  marcaponto ();
  
  if (xbolinha +raio > width ||xbolinha-raio<0)
  xvelocidade *= -1
  if (ybolinha + raio > height||ybolinha - raio < 0)
  yvelocidade *= -1 
  
  
}
function criabolinha () {circle(xbolinha, ybolinha, diametro)} 
function movimentobolinha () { xbolinha += xvelocidade
  ybolinha += yvelocidade} 
function colisaoborda () {} 
function minharaquete () {rect(xraquete,yraquete,lraquete,hraquete)} 
function movimentaraquete () {if (keyIsDown(UP_ARROW))
  yraquete -= 10
   if (keyIsDown(DOWN_ARROW))
  yraquete += 10} 
function colisaoraquete (){
  if(xbolinha - raio < xraquete + lraquete
    && ybolinha - raio < yraquete + hraquete 
    && ybolinha + raio > yraquete)
xvelocidade *= -1}
function criaraqueteop (){
  rect (xraqueteop, yraqueteop, lraquete, hraquete) 
} 
function movimentoraqueteop() {
  velocidadeyop = ybolinha - yraqueteop - lraquete/2 - 200
  yraqueteop += velocidadeyop
}
  function colisaobolinharaquete  () {
    colidiu = collideRectCircle(xraqueteop, yraqueteop, lraquete, hraquete, xbolinha, ybolinha, diametro)
 if(colidiu)
   xvelocidade *= -1
  }
    function criaplacar() {
      stroke (255)
      fill (color (35,40,65))
      rect (285,3,35,30)
      rect (85,3,35,30)
      textAlign (CENTER)
      textSize(20)
      fill(255)
      text(meuspontos, 100, 20)
      text(pontosop, 300, 20)
} 
function marcaponto () {
  if (xbolinha < 15)
    pontosop += 1
  if (xbolinha > 430)
    meuspontos += 1
}
