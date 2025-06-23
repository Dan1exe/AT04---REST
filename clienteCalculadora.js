import fetch from "node-fetch";

const BASE_URL = "https://calculadora-fxpc.onrender.com";

async function listarOperacoes() {
  const url = `${BASE_URL}/operations`;
  const response = await fetch(url);
  const data = await response.json();
  console.log("Operações disponíveis:");
  console.log(data);
}

async function executarOperacao(operacao, valor1, valor2) {
  const url = `${BASE_URL}/operation/${operacao}/${valor1}/${valor2}`;
  const response = await fetch(url, {
    method: "POST",
  });
  const data = await response.json();
  console.log(`Resultado da operação ${operacao}(${valor1}, ${valor2}):`);
  console.log(data);
}

// Executando tudo
(async () => {
  await listarOperacoes();
  await executarOperacao("soma", 10, 2);
  await executarOperacao("subtracao", 20, 5);
  await executarOperacao("multiplicacao", 3, 6);
  await executarOperacao("divisao", 18, 2);
})();
