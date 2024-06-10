//----Variáveis da Bolinha -----//
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

let xVelocidadeBolinha = 6;
let yVelocidadeBolinha = 6;

//-----Variáveis da Raquete------//
let xRaquete = 10;
let yRaquete = 150;
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

let raqueteComprimento = 10;
let raqueteAltura = 150;
let colidiu = false;

//-----Placar e Pontos--------//
let meusPontos = 0;
let pontosDoOponente = 0;

//-----Sons--------//
let trilha;
let raquetada;
let ponto;

function preload(){
  trilha = loadSound("/sons/trilha.mp3");
  raquetada = loadSound("/sons/raquetada.mp3");
  ponto = loadSound("/sons/ponto.mp3");
}

//------------------------
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}//fim da função setup

function draw() {
  background(0);
  criaBolinha();
  movimentaBolinha();
  colisaoBordas();
  criaRaquete(xRaquete, yRaquete);
  criaRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaquete();
  movimentaRaqueteOponente();
  colisaoComRaquete(xRaquete, yRaquete);
  colisaoComRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPontos(meusPontos, 160,50);
  incluiPontos(pontosDoOponente, 420, 50);
  marcaPontos();
}//fim da função draw

//-----Funções da Bolinha--------//
function criaBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += xVelocidadeBolinha;
  yBolinha += yVelocidadeBolinha;
}

function colisaoBordas(){
  if (xBolinha + raio > width || xBolinha < 0){
    xVelocidadeBolinha *=-1;
  }
  if (yBolinha + raio > height || yBolinha - raio <0){
    yVelocidadeBolinha *=-1;
  }
}
//--------Funções da Raquete ---------//
function criaRaquete(x,y){
  rect(x,y, raqueteComprimento, raqueteAltura)
}

function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
    if(yRaquete > 0){
      yRaquete +=-10;
    }
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yRaquete < 250){
      yRaquete +=10;
    }
  }
}

function movimentaRaqueteOponente(){
  if(keyIsDown(87)){
    if(yRaqueteOponente > 0){
      yRaqueteOponente +=-10;
    }
  }
  if(keyIsDown(83)){
    if(yRaqueteOponente < 250){
      yRaqueteOponente -=-10;
    }
  }
}

function colisaoComRaquete(x,y){
  colidiu = collideRectCircle(x,y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha,raio);
    if(colidiu === true){
      xVelocidadeBolinha *= -1;
      raquetada.play();
    }
}

//--------funções do Placar-------//
function incluiPontos(pontos, x, y){
  textSize(32);
  fill(255);
  text(pontos, x, y )
}

function marcaPontos(){
  if (xBolinha + raio >598){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha + raio < 10){
    pontosDoOponente += 1;
    ponto.play();
  }
}


//------------------------------
/* 
1- Criar Bolinha
2- Movimentar Bolinha
3- Colisão com as bordas
-----------------------
4- Criar Raquete
5- Movimentar Raquete
6- Adicionar biblioteca p5.Collider
7- Colisão com a raquete
7- Mostrar raquete do Oponente
8- Movimentar raquete do Oponente
9- Colisão com a raquete do oponente
------------------------------------
10-Incluir Pontos
11- Marca pontos
12- Adicionando sons e trilha
*/