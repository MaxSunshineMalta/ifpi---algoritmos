import { question } from "readline-sync";

function main(){
    const nome = String(question('Digite o nome do funcionário:'))
    const salario_fixo = obter_numero_positivo('Digite o valor do salário fixo:')
    const vendas = obter_numero_de_vendas('Digite o valor das vendas:')

    const salario = salario_fixo + (vendas * 0.15)

    mostrar_texto(`TOTAL = R$ ${salario.toFixed(2)}`)
}


function mostrar_texto(texto){
    return console.log(texto)
}


function obter_numero_positivo(label = 'Digite um número:'){
    let numero = Number(question(label))

    while (numero <= 0){
        mostrar_texto('Favor digite um número positivo!')
        numero = Number(question(label))
    }

    return numero
}


function obter_numero_de_vendas(label = 'Digite o número de vendas:'){
    let vendas = Number(question(label))

    while(vendas < 0){
        mostrar_texto('Favor digite um número de vendas válido!')
        vendas = Number(question(label))
    }

    return vendas
}

main()