let prato = null;
let pratoNome = null;
let pratoValor;
let bebida = null;
let bebidaNome = null;
let bebidaValor;
let sobremesa = null;
let sobremesaNome = null;
let sobremesaValor;
let total = 0;


function selecionarPrato(nomePrato) {
  let bloco = document.querySelector("."+ nomePrato +" .prato-nome p");
  let pratoNome = bloco.innerHTML;
  console.log(pratoNome);
  
  let bloco2 = document.querySelector("."+ nomePrato +" .prato-preco span");
  pratoValor = bloco2.innerHTML;
  console.log(pratoValor);
  
  let selecionado = document.querySelector(".pratos .selecionado"); //caminho certo? eu coloquei o ALL dps
  if(prato != null) { 
    selecionado.classList.remove("selecionado"); 
    prato = null;
  }
  let bloco3 = document.querySelector("."+nomePrato);
  if(prato==null){
    bloco3.classList.add("selecionado"); 
    prato = nomePrato;
  } 
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
  let bloco = document.querySelector("."+ nomeBebida +" .bebida-nome p");
  let bebidaNome = bloco.innerHTML;
  console.log(bebidaNome);
  
  let bloco2 = document.querySelector("."+ nomeBebida +" .bebida-preco span");
  bebidaValor = bloco2.innerHTML;
  console.log(bebidaValor);

  let selecionado = document.querySelector(".bebidas .selecionado"); //caminho certo? eu coloquei o ALL dps
  if(bebida != null) { 
    selecionado.classList.remove("selecionado"); 
    bebida = null;
  }
  let bloco3 = document.querySelector("."+nomeBebida);
  if(bebida==null){
    bloco3.classList.add("selecionado"); 
    bebida = nomeBebida;
  } 
  if(prato!=null && bebida!=null && sobremesa!=null){
    BotaoFecharPedido();
  }
}

function selecionarSobremesa(nomeSobremesa) {
  let bloco = document.querySelector("."+ nomeSobremesa +" .sobremesa-nome p");
  let sobremesaNome = bloco.innerHTML;
  console.log(sobremesaNome);
  
  let bloco2 = document.querySelector("."+ nomeSobremesa +" .sobremesa-preco span");
  sobremesaValor = bloco2.innerHTML;
  console.log(sobremesaValor);

  let selecionado = document.querySelector(".sobremesas .selecionado"); //caminho certo? eu coloquei o ALL dps
  if(sobremesa != null) { 
    selecionado.classList.remove("selecionado"); 
    sobremesa = null;
  }
  let bloco3 = document.querySelector("."+nomeSobremesa);
  if(sobremesa==null){
    bloco3.classList.add("selecionado"); 
    sobremesa = nomeSobremesa;
  } 
  if(prato!=null && bebida!=null && sobremesa!=null){
    BotaoFecharPedido();
  }
}

function BotaoFecharPedido(){
  let botao1 = document.querySelector(".botao-finalizar-pedido");
  botao1.classList.remove("escondido");

  let botao2 = document.querySelector(".botao-pedido");
  botao2.classList.add("escondido");
  
  total = (parseFloat(pratoValor.replace(",",".")) + parseFloat(bebidaValor.replace(",",".")) + parseFloat(sobremesaValor.replace(",","."))).toFixed(2);;
  total = total.replace(".",",");
  console.log(total);
}

function fecharPedido(){
  /*
  let tela1 = document.querySelector(".tela-finalizacao");
  tela1.classList.remove("escondido");

  let tela2 = document.querySelector(".container");
  tela2.classList.add("escondido");
  */

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

function gerarLink(){
  const inicio = "https://wa.me/5562996766076?text=";
  let mensagem = "Olá, gostaria de fazer o pedido:\n- Prato: "+ prato +"\n- Bebida: "+ bebida +"\n- Sobremesa: "+ sobremesa +"\nTotal: "+ total;
  let soma;
}

function teste(){
  let bloco = document.querySelector("."+ nomePrato +" .prato-nome p");
  let pratoNome = bloco.innerHTML;
  console.log(pratoNome);
  
  let bloco2 = document.querySelector("."+ nomePrato +" .prato-preco p");
  pratoValor = bloco2.innerHTML;
  console.log(pratoValor);
}