// Obtém os elementos do DOM
const btnSubtrairProduto = document.getElementById('btn-subtrair-produto-01');
const btnAdicionarProduto = document.getElementById('btn-adicionar-produto-01');
const quantidadeProduto = document.getElementById('quantidade-produto-01');
const quantidadeSubtotal = document.getElementById('quantidade-subtotal');
const valorSubtotal = document.getElementById('valor-subtotal');
const capa = document.querySelector('.capa');
const infoProduto = document.querySelector('.info-produto');
const cepInput = document.getElementById('cep');
const valorFrete = document.getElementById('valor-frete');
const valorTotal = document.getElementById('valor-total');
const btnFinalizarCompra = document.getElementById('btn-finalizar-compra');

// Define o valor do produto e o contador inicial
const valorProduto = 22.66;
let contador = parseInt(quantidadeProduto.value);

// Atualiza o subtotal
function atualizarSubtotal() {
  const subtotal = contador * valorProduto;
  quantidadeSubtotal.textContent = contador;
  valorSubtotal.textContent = subtotal.toFixed(2);
}

// Adiciona um produto ao contador e atualiza o subtotal
btnAdicionarProduto.addEventListener('click', function () {
  contador++;
  quantidadeProduto.value = contador;
  atualizarSubtotal();
});

// Remove um produto do contador e atualiza o subtotal
btnSubtrairProduto.addEventListener('click', function () {
  if (contador > 0) {
    contador--;
    quantidadeProduto.value = contador;
    atualizarSubtotal();
  }
});

// Posiciona a capa à esquerda e as informações à direita
function ajustarLayout() {
  capa.style.float = 'left';
  infoProduto.style.float = 'right';
}

// Adiciona um ouvinte de evento para o campo de entrada do CEP
cepInput.addEventListener('input', function () {
  const cep = cepInput.value;
  const regiaoNorteNordeste = '50000-01';
  const regiaoSulSudeste = '50000-02';
  const regiaoCentroOeste = '50000-03';
  const freteGratisCep = '53300-280';
  const taxaNorteNordeste = 0.05;
  const taxaSulSudeste = 0.1;
  const taxaCentroOeste = 0.15;

  let taxaFrete = 0;
  if (cep === regiaoNorteNordeste) {
    taxaFrete = taxaNorteNordeste;
  } else if (cep === regiaoSulSudeste) {
    taxaFrete = taxaSulSudeste;
  } else if (cep === regiaoCentroOeste) {
    taxaFrete = taxaCentroOeste;
  }

  let valorFreteCalculado = 0;
  if (cep !== freteGratisCep) {
    valorFreteCalculado = parseFloat(valorSubtotal.textContent) * taxaFrete;
  }

  valorFrete.textContent = valorFreteCalculado.toFixed(2);

  const valorTotalCalculado = parseFloat(valorSubtotal.textContent) + valorFreteCalculado;
  valorTotal.textContent = valorTotalCalculado.toFixed(2);
});

// Adiciona um ouvinte de evento para o botão Finalizar Compra
btnFinalizarCompra.addEventListener('click', function () {
  const mensagem = document.createElement('div');
  mensagem.className = 'mensagem-finalizada';
  mensagem.textContent = 'COMPRA FINALIZADA';

  document.body.appendChild(mensagem);

  setTimeout(function () {
    mensagem.remove();
  }, 3000);
});

// Chama a função inicialmente para exibir o subtotal inicial e ajustar o layout
atualizarSubtotal();
ajustarLayout();
