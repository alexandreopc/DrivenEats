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
let nomeUsuario; 
let enderecoUsuario;

function selecionarPrato(nomePrato) {
  let bloco = document.querySelector("."+ nomePrato +" .prato-nome p");
  pratoNome = bloco.innerHTML;
  
  let bloco2 = document.querySelector("."+ nomePrato +" .prato-preco span");
  pratoValor = bloco2.innerHTML;

  let selecionado = document.querySelector(".pratos .selecionado");
  let selecionado2 = document.querySelector(".pratos .selecionado .icone");
  if(prato != null) { 
    selecionado.classList.remove("selecionado");
    selecionado2.classList.add("escondido"); 
    //document.querySelector(".pratos .selecionado .icone").classList.add("escondido"); pq nao esse?
    prato = null;
  }
  let bloco3 = document.querySelector("."+nomePrato);
  if(prato==null){
    bloco3.classList.add("selecionado"); 
    //selecionado2.classList.remove("escondido"); pq nao esse?
    document.querySelector(".pratos .selecionado .icone").classList.remove("escondido");
    prato = nomePrato;
  } 
  if(prato!=null && bebida!=null && sobremesa!=null){
    BotaoFecharPedido();
  }
}

function selecionarBebida(nomeBebida) {
  let bloco = document.querySelector("."+ nomeBebida +" .bebida-nome p");
  bebidaNome = bloco.innerHTML;
  
  let bloco2 = document.querySelector("."+ nomeBebida +" .bebida-preco span");
  bebidaValor = bloco2.innerHTML;

  let selecionado = document.querySelector(".bebidas .selecionado");
  let selecionado2 = document.querySelector(".bebidas .selecionado .icone");
  if(bebida != null) { 
    selecionado.classList.remove("selecionado"); 
    selecionado2.classList.add("escondido"); 
    bebida = null;
  }
  let bloco3 = document.querySelector("."+nomeBebida);
  if(bebida==null){
    bloco3.classList.add("selecionado"); 
    document.querySelector(".bebidas .selecionado .icone").classList.remove("escondido");
    bebida = nomeBebida;
  } 
  if(prato!=null && bebida!=null && sobremesa!=null){
    BotaoFecharPedido();
  }
}

function selecionarSobremesa(nomeSobremesa) {
  let bloco = document.querySelector("."+ nomeSobremesa +" .sobremesa-nome p");
  sobremesaNome = bloco.innerHTML;

  let bloco2 = document.querySelector("."+ nomeSobremesa +" .sobremesa-preco span");
  sobremesaValor = bloco2.innerHTML;

  let selecionado = document.querySelector(".sobremesas .selecionado"); 
  let selecionado2 = document.querySelector(".sobremesas .selecionado .icone");
  if(sobremesa != null) { 
    selecionado.classList.remove("selecionado"); 
    selecionado2.classList.add("escondido"); 
    sobremesa = null;
  }
  let bloco3 = document.querySelector("."+nomeSobremesa);
  if(sobremesa==null){
    bloco3.classList.add("selecionado");
    document.querySelector(".sobremesas .selecionado .icone").classList.remove("escondido");
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
}

function fecharPedido(){
  nomeUsuario = prompt("Qual seu nome?");
  enderecoUsuario = prompt("Qual o endereco de entrega?");
  
  let tela1 = document.querySelector(".tela-finalizacao");
  tela1.classList.remove("escondido");

  let tela2 = document.querySelector(".container");
  tela2.classList.add("escondido");

  document.querySelectorAll(".pedido-valor")[0].children[0].innerHTML = `${pratoNome}`;
  document.querySelectorAll(".pedido-valor")[0].children[1].innerHTML = `R$ ${pratoValor}`;
  
  document.querySelectorAll(".pedido-valor")[1].children[0].innerHTML = `${bebidaNome}`;
  document.querySelectorAll(".pedido-valor")[1].children[1].innerHTML = `R$ ${bebidaValor}`;

  document.querySelectorAll(".pedido-valor")[2].children[0].innerHTML = `${sobremesaNome}`;
  document.querySelectorAll(".pedido-valor")[2].children[1].innerHTML = `R$ ${sobremesaValor}`;

  document.querySelectorAll(".pedido-valor")[3].children[1].innerHTML = `R$ ${total}`;
}

function finalizarPedido(){
  alert(gerarLink());
}

function cacelarPedido(){
  let tela1 = document.querySelector(".tela-finalizacao");
  tela1.classList.add("escondido");

  let tela2 = document.querySelector(".container");
  tela2.classList.remove("escondido");
}

function gerarLink(){
  let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${pratoNome}\n- Bebida: ${bebidaNome}\n- Sobremesa: ${sobremesaNome}\nTotal: R$ ${total}\n\nNome: ${nomeUsuario}\nEndereco: ${enderecoUsuario}`;
  let link = `https://wa.me/5562996766076?text=${encodeURIComponent(mensagem)}`;
  window.open(link);
}