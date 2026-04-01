// Função para adicionar número ao visor
function adicionarNumero(numero) {
  const campo = document.querySelector(".current-calc");
  if (campo) {
    // Se o visor estiver mostrando apenas 0, substitui pelo novo número
    if (campo.textContent === "0") {
      campo.textContent = numero;
    } else {
      campo.textContent += numero;
    }
  }
}

// Adiciona evento aos botões numéricos
document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll(".buttons button");
  botoes.forEach(function (botao) {
    if (!isNaN(botao.textContent)) {
      botao.addEventListener("click", function () {
        adicionarNumero(botao.textContent);
      });
    }
  });
});
// Função para limpar o conteúdo do campo com a classe 'current-calc'
function limparCurrentCalc() {
  const campo = document.querySelector(".current-calc");
  if (campo) {
    campo.textContent = "";
  }
}

// Exemplo de uso: chamar essa função para limpar o display
//limparCurrentCalc();
