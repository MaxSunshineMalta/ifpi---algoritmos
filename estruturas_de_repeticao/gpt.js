import { question } from "readline-sync";

// Pedindo os números ao usuário
let num1 = Number(question('numero1:'))
let num2 = Number(question('numero2:'))

let menor = num1 < num2 ? num1 : num2;
let maior = num1 > num2 ? num1 : num2;

let numeros_perfeitos = [];
let quantidade_perfeitos = 0;

let i = menor;
while (i <= maior) {
  let somaDivisores = 0;
  let j = 1;
  
  while (j < i) {
    if (i % j === 0) {
      somaDivisores += j;
    }
    j++;
  }
  
  if (somaDivisores === i) {
    numeros_perfeitos[quantidade_perfeitos] = i;
    quantidade_perfeitos++;
    
    let listaDivisores = "1";
    let k = 2;
    while (k < i) {
      if (i % k === 0) {
        listaDivisores += " + " + k;
      }
      k++;
    }
    listaDivisores += " = " + somaDivisores;
    
    console.log(i + " = " + listaDivisores);
  }
  
  i++;
}

console.log("Foram encontrados " + quantidade_perfeitos + " números perfeitos no intervalo.");

// Variáveis para armazenar os números perfeitos e a quantidade encontrada
let numerosPerfeitos = [];
let quantidadePerfeitos = 0;

// Verificando cada número no intervalo, incluindo os extremos
for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
  let somaDivisores = 0;
  
  // Verificando cada divisor do número
  for (let j = 1; j < i; j++) {
    if (i % j === 0) {
      somaDivisores += j;
    }
  }
  
  // Se a soma dos divisores for igual ao número, é perfeito
  if (somaDivisores === i) {
    numeros_perfeitos.push(i);
    quantidade_perfeitos++;
    
    // Criando a lista somatório dos divisores
    let listaDivisores = "1";
    for (let k = 2; k < i; k++) {
      if (i % k === 0) {
        listaDivisores += " + " + k;
      }
    }
    listaDivisores += " = " + somaDivisores;
    
    // Exibindo o número perfeito e sua lista somatório de divisores
    console.log(i + " = " + listaDivisores);
  }
}

// Exibindo a quantidade total de números perfeitos encontrados
console.log("Foram encontrados " + quantidade_perfeitos + " números perfeitos no intervalo.");