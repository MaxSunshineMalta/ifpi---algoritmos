import { question } from "readline-sync";

//Entrada
const valor = Number(question('Valor:'))

//Processamento
const porcentagem = (0.7 * valor)

//Saída
console.log('Resultado: R$', porcentagem.toFixed(2))
