import { question } from "readline-sync";

function main(){
    const numero = obter_numero_inteiro_positivo('Digite o número:')
    const qtd_de_horas_trabalhadas_por_mes = obter_numero_inteiro_positivo('Digite a quandtidade de horas trabalhadas no mês em questão:')
    const valor_da_hora = obter_numero_positivo('Digite o valor pago por cada hora trabalhada:')

    const salario = qtd_de_horas_trabalhadas_por_mes * valor_da_hora

    mostrar_texto(`NUMBER = ${numero}`)
    mostrar_texto(`SALARY = U$ ${salario.toFixed(2)}`)
}

function mostrar_texto(texto){
    return console.log(texto)
}


function obter_numero_inteiro_positivo(label = 'Digite um número:'){
    let numero = Number(question(label))
    let candidato = (numero * 10) % 10
        
    while (candidato !== 0 || numero <= 0){
        mostrar_texto('Favor digite um número inteiro positivo!')
        numero = Number(question(label))
        candidato = (numero * 10) % 10
    }
    
        return numero
}


function obter_numero_positivo(label = 'Digite um número:'){
    let numero = Number(question(label))

    while (numero <= 0){
        mostrar_texto('Favor digite um número positivo!')
        numero = Number(question(label))
    }

    return numero
}

main()