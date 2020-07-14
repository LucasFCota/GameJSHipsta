function setup() {
  let cnv = createCanvas(800, 600);
  cnv.position((windowWidth/2)-400, (windowHeight/2)-300);
  
  frameRate(30);//30Hz
  somDoJogo.loop();
  somDoJogo.setVolume(0.3);
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  botaoGerenciador = new BotaoGerenciador('Iniciar', (windowWidth/2)-50, windowHeight*0.7);
  jogo.setup();
  
  cenas = {
    jogo,
    telaInicial
  };
}

function keyPressed(){
  jogo.keyPressed();
}

function draw() {
  cenas[cenaAtual].draw();
}
