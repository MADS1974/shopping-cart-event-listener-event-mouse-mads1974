let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valorInicial: 11.66,
  valor: 11.66,
};

function atualizarSubtotal () {
if(subtotalInfo.quantidade < 2 ){
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " ítem";
}
else{
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " ítens";
}
valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);

}

let mais = document.getElementById("btn-adicionar-produto-01");

let menos = document.getElementById("btn-subtrair-produto-01");

let quantProduto = document.getElementById("quantidade-produto-01");

function adicUm () {
    quantProduto.value = Number(quantProduto.value)+1;

    subtotalInfo.quantidade = subtotalInfo.quantidade + 1;

        subtotalInfo.valor = subtotalInfo.valor + subtotalInfo.valorInicial;

    atualizarSubtotal();
}

function menosUm () {
  if(quantProduto.value > 0){
  quantProduto.value = Number(quantProduto.value) - 1;
  subtotalInfo.quantidade = subtotalInfo.quantidade - 1;

  if (subtotalInfo.valor > subtotalInfo.valorInicial) {
    subtotalInfo.valor = subtotalInfo.valor - subtotalInfo.valorInicial;
  } else {
    subtotalInfo.valor = 0.00;
  }
  if (quantProduto.value > 1){

  }  
 
  atualizarSubtotal();
}

}

mais.addEventListener("click",adicUm);

menos.addEventListener("click",menosUm);


