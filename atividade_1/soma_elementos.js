import { question } from "readline-sync";

//Entrada
const valor = Number(question('Valor:'))

//Processamento
const resto1 = (valor % 1000)
const resto2 = (resto1 % 100)
const unidades = (valor % 10)
const milhar = ((valor - resto1) / 1000)
const centenas = ((resto1 - resto2) / 100)
const dezenas = ((resto2 - unidades) / 10)
const soma = (unidades + dezenas + centenas + milhar)

//Saída
console.log('Soma:', soma)