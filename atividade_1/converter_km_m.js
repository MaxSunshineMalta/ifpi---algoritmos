import { question } from "readline-sync";

//Entrada
const metros_dados = Number(question('Metros(m):'))

//Processamento
const m_restantes = (metros_dados % 1000)
const km = ((metros_dados - m_restantes) / 1000)

//Saída
console.log('Total:', km.toFixed(2),'km e',m_restantes.toFixed(2),'m')