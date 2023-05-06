import {question} from "readline-sync";

// Entrada
const numero = Number(question ('numero:'))

// Processamento
const resto = (numero % 100)
const quociente = ((numero - resto) / 100) 
const meio = ((((numero / 10) % 10) * 10 - (numero % 10)) / 10)
const final= (numero % 10)
const somatorio = (quociente + meio + final)

//Saída
console.log('Somatório:', somatorio.toFixed(2))