<h1 align="center">
  Criando um carrinho de compras
</h1>

<p align="center">
  <a href="https://www.linkedin.com/posts/mads1974_construindo-um-carrinho-de-compras-com-base-activity-7138569723524317184-M2cV?utm_source=share&utm_medium=member_desktop">🔗 Live Preview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto"> 🖥️ Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">🚀 Tecnologias</a>
</p>

<p align="center">
  <a href="https://wakatime.com/badge/user/68660678-6b86-4b78-98df-f5f41a37e1bc/project/9fc59800-279b-462d-9f12-92ea3bf5697e"><img src="https://wakatime.com/badge/user/68660678-6b86-4b78-98df-f5f41a37e1bc/project/9fc59800-279b-462d-9f12-92ea3bf5697e.svg" alt="wakatime"></a>
</p>

## 💻 Projeto

Repositorio para o curso "Introdução a programação - PROZ Educação"

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- CSS
- Javascript


---

## Melhorias e ajustes

### 1 - Exercicio:

Conforme exercicio proposto ao final da aula, foi implementado a function menosUM()

Nessa função, o código if (quantProduto.value > 0) verifica se o valor atual do campo quantProduto é maior que zero. 

Se for, o código dentro do bloco if é executado, que inclui a redução da quantidade e a atualização do subtotal. 

Isso garante que a quantidade não seja menor que zero. Se o valor for zero ou negativo, o código dentro do bloco if é ignorado, e a função não faz alterações.

OU SEJA, a verificação if (quantProduto.value > 0) impede que o contador de produtos seja menor que zero.

```javascript

function menosUm() {
  if (quantProduto.value > 0) {
    quantProduto.value = Number(quantProduto.value) - 1;
    subtotalInfo.quantidade = subtotalInfo.quantidade - 1;

    if (subtotalInfo.valor > subtotalInfo.valorInicial) {
      subtotalInfo.valor = subtotalInfo.valor - subtotalInfo.valorInicial;
    } else {
      subtotalInfo.valor = 0.00;
    }

    atualizarSubtotal();
  }
}


PARA INCREMENTAR UM POUCO MAIS (neste exercicio) usei a tag <img> 
dentro da <div class="capa"> para acrescentar uma miniatura referente ao livro.



===========================================================================================

## Enhancements and Adjustments

### 2 - Além do exercicio: 

Estilizei um pouco mais a página.

Adicionei a descrição do livro.

Adicionei uma simulação com cálculo do frete, neste caso sabendo que o cálculo de frete para um site geralmente envolve a integração com serviços de entrega (como correios ou transportadoras) e a utilização de APIs conforme o serviço de entrega que sua empresa usa, 
bem como autenticações de chaves, implementação no lado servidor e mais uma serie de aplicações mais robustas, assim sendo eu simulei:

Aqui, são obtidos os elementos do DOM usando seus IDs ou classes e armazenados em variáveis para posterior manipulação.


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

Valor do produto  e contador inicial

const valorProduto = 22.66;
let contador = parseInt(quantidadeProduto.value);

Uma function para atualizar o subtotal.
A function calcula o subtotal multiplicando a quantidade pelo valor do produto.
Atualiza os elementos no DOM exibindo a quantidade e o subtotal formatado.

function atualizarSubtotal() {
  const subtotal = contador * valorProduto;
  quantidadeSubtotal.textContent = contador;
  valorSubtotal.textContent = subtotal.toFixed(2);
}


Eventos de clique que incrementam ou decrementam o contador (quantidade de produtos) e atualizam o subtotal.

btnAdicionarProduto.addEventListener('click', function () {
  contador++;
  quantidadeProduto.value = contador;
  atualizarSubtotal();
});

btnSubtrairProduto.addEventListener('click', function () {
  if (contador > 0) {
    contador--;
    quantidadeProduto.value = contador;
    atualizarSubtotal();
  }
});

Lógica para calcular o frete e atualizar o total eu simulei 4 opções de código/regiões.

O código dentro do evento de input do campo de CEP verifica a região do CEP e calcula a taxa de frete.
O valor do frete é calculado com base na taxa de frete e no subtotal, e o total é atualizado.

cepInput.addEventListener('input', function () {
  const cep = cepInput.value;
  const regiaoNorteNordeste = '50000-01';
  const regiaoSulSudeste = '50000-02';
  const regiaoCentroOeste = '50000-03';
  const freteGratisCep = '53300-280';
  const taxaNorteNordeste = 0.05;  equivale a 5%
  const taxaSulSudeste = 0.1;  equivale a 10%
  const taxaCentroOeste = 0.15; equivale a 15%

Inicializa a variável valor com um valor padrão de 0.
Verifica se o CEP pertence à região Norte/Nordeste, Thrue, taxaFrete é atribuída a NE
E assim sucessivamente.
 
  if (cep === regiaoNorteNordeste) {
    taxaFrete = taxaNorteNordeste;
  } else if (cep === regiaoSulSudeste) {
    taxaFrete = taxaSulSudeste;
  } else if (cep === regiaoCentroOeste) {
    taxaFrete = taxaCentroOeste;
  }

Nesta lógica, inicializa a variável com um valor padrão de 0.
Calcula-se o valor do frete com base na taxa associada à região do CEP, a menos que o CEP seja elegível para frete grátis. 

  let valorFreteCalculado = 0;
  if (cep !== freteGratisCep) {
    valorFreteCalculado = parseFloat(valorSubtotal.textContent) * taxaFrete;
  }

  valorFrete.textContent = valorFreteCalculado.toFixed(2);

  const valorTotalCalculado = parseFloat(valorSubtotal.textContent) + valorFreteCalculado;
  valorTotal.textContent = valorTotalCalculado.toFixed(2);


Após confirmado o valor do frete + valor da compra o usuário pode finalizar, este evento é acionado quando o botão "Finalizar Compra" é clicado.
Uma mensagem é criada dinamicamente, exibida no corpo do documento e removida após 3 segundos.

btnFinalizarCompra.addEventListener('click', function () {
  const mensagem = document.createElement('div');
  mensagem.className = 'mensagem-finalizada';
  mensagem.textContent = 'COMPRA FINALIZADA';

  document.body.appendChild(mensagem);

  setTimeout(function () {
    mensagem.remove();
  }, 3000);
});





## 💻 Project

Repository for the course "Introduction to Programming - PROZ Education."

## 🚀 Technologies

This project was developed using the following technologies:

- HTML
- CSS
- JavaScript

---

## Enhancements and Adjustments

### 1. Exercise:

As per the exercise proposed at the end of the class, the `menosUM()` function was implemented. This function ensures that the product quantity does not go below zero, preventing negative values in the product counter.

```javascript
function menosUm() {
  if (quantProduto.value > 0) {
    quantProduto.value = Number(quantProduto.value) - 1;
    subtotalInfo.quantidade = subtotalInfo.quantidade - 1;

    if (subtotalInfo.valor > subtotalInfo.valorInicial) {
      subtotalInfo.valor = subtotalInfo.valor - subtotalInfo.valorInicial;
    } else {
      subtotalInfo.valor = 0.00;
    }

    atualizarSubtotal();
  }
}

Additionally, a thumbnail related to the book was added using the <img> tag within the <div class="capa">.

2. Beyond the Exercise:
Several functionalities were implemented in the shopping cart:

Improved page styling.
Added book description.
Simulated freight calculation for different regions.
Explaining some of the additions:

Subtotal Update Function:
A function was created to update the subtotal by multiplying the quantity by the product value. It updates the DOM elements displaying the quantity and formatted subtotal.

function atualizarSubtotal() {
  const subtotal = contador * valorProduto;
  quantidadeSubtotal.textContent = contador;
  valorSubtotal.textContent = subtotal.toFixed(2);
}

Events for Incrementing or Decrementing Products:
Events were added to the buttons for adding or subtracting products, updating the subtotal accordingly.

btnAdicionarProduto.addEventListener('click', function () {
  contador++;
  quantidadeProduto.value = contador;
  atualizarSubtotal();
});

btnSubtrairProduto.addEventListener('click', function () {
  if (contador > 0) {
    contador--;
    quantidadeProduto.value = contador;
    atualizarSubtotal();
  }
});

Freight Calculation Logic:
Simulated logic for calculating freight based on different regions was implemented. This is a simplified simulation, and in a real-world scenario, integration with delivery services and APIs would be necessary.

cepInput.addEventListener('input', function () {
  // ... (region and tax calculations)
  // ... (freight calculation logic)
  // ...
});

Finalizing the Purchase:
An event was added for finalizing the purchase when the "Finalizar Compra" button is clicked. A dynamic message is created, displayed in the document body, and removed after 3 seconds.

btnFinalizarCompra.addEventListener('click', function () {
  const mensagem = document.createElement('div');
  mensagem.className = 'mensagem-finalizada';
  mensagem.textContent = 'COMPRA FINALIZADA';

  document.body.appendChild(mensagem);

  setTimeout(function () {
    mensagem.remove();
  }, 3000);
});

For further details or inquiries, feel free to contact me on LinkedIn - Márcio Adriano [MADS 1974].


This revised version provides more structure, clarity, and professionalism to your README. Feel free to adjust it further based on your preferences!
