import { question } from "readline-sync";

//Entrada
const custo_fabrica = Number(question('Valor:'))

//Processamento
const preco_distribuidor = (0.28 * custo_fabrica)
const impostos = (0.45 * custo_fabrica)
const custo_consumidor = (custo_fabrica + preco_distribuidor + impostos)

//Saída
console.log('Custo do Consumidor:', custo_consumidor.toFixed(2))