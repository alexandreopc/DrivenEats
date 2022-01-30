let prato = null;
let bebida = null;
let sobremesa = null;
let soma = 0;

function selecionarPrato(nomePrato) {

  let selecionado = document.querySelector(".pratos .selecionado"); //caminho certo? eu coloquei o ALL dps
  if(prato != null) { 
    selecionado.classList.remove("selecionado"); 
    prato = null;
  }
  let bloco = document.querySelector("."+nomePrato);
  if(prato==null){
    bloco.classList.add("selecionado"); 
    prato = nomePrato;
  } 
  console.log(prato);
  if(prato!=null && bebida!=null && sobremesa!=null){
    BotaoFecharPedido();
  }
}//como adicionar funcao de clicar de novo e deselecionar

/*
let selecionado = document.querySelector(".prato .selecionado"); //caminho certo? eu coloquei o ALL dps
  //let possuiClasse = selecionado.classList.contains("selecionado");
  if(prato != null) { 
    selecionado.classList.remove("selecionado"); 
    prato = null;//quando comento essa linha nao consigo selecionar mias de um prato
  }
  let bloco = document.querySelector("."+nomePrato);
  if(prato==null){
    bloco.classList.add("selecionado"); 
    prato = nomePrato;
  } 
  console.log(prato);

-------------------------------------------------------------

const selecionado = document.querySelector("."+nomePrato .selecionado);
  if(selecionado !== null) { //achar o jeito funcionar com remove e add
    selecionado.classList.remove("selecionado"); //.add
    prato = null;
  }
  const bloco = document.querySelector("."+nomePrato)//da pra colocar .nomeComida 
  if(prato==null){
    bloco.classList.add("selecionado"); //.add
    prato = nomePrato;
  } 
*/
function selecionarBebida(nomeBebida) {

  let selecionado = document.querySelector(".bebidas .selecionado"); //caminho certo? eu coloquei o ALL dps
  if(bebida != null) { 
    selecionado.classList.remove("selecionado"); 
    bebida = null;
  }
  let bloco = document.querySelector("."+nomeBebida);
  if(bebida==null){
    bloco.classList.add("selecionado"); 
    bebida = nomeBebida;
  } 
  console.log(bebida);
  if(prato!=null && bebida!=null && sobremesa!=null){
    BotaoFecharPedido();
  }
}

function selecionarSobremesa(nomeSobremesa) {

  let selecionado = document.querySelector(".sobremesas .selecionado"); //caminho certo? eu coloquei o ALL dps
  if(sobremesa != null) { 
    selecionado.classList.remove("selecionado"); 
    sobremesa = null;
  }
  let bloco = document.querySelector("."+nomeSobremesa);
  if(sobremesa==null){
    bloco.classList.add("selecionado"); 
    sobremesa = nomeSobremesa;
  } 
  console.log(sobremesa);
  if(prato!=null && bebida!=null && sobremesa!=null){
    BotaoFecharPedido();
  }
}

function BotaoFecharPedido(){
  let botao1 = document.querySelector(".botao-finalizar-pedido");
  botao1.classList.remove("escondido");

  let botao2 = document.querySelector(".botao-pedido");
  botao2.classList.add("escondido");
}

function fecharPedido(){
  let tela1 = document.querySelector(".tela-finalizacao");
  tela1.classList.remove("escondido");

  let tela2 = document.querySelector(".container");
  tela2.classList.add("escondido");
}

function finalizarPedido(){
  alert("bao dms");
}

function cacelarPedido(){
  let tela1 = document.querySelector(".tela-finalizacao");
  tela1.classList.add("escondido");

  let tela2 = document.querySelector(".container");
  tela2.classList.remove("escondido");
}
