import {readFileSync} from 'fs'
var lines = readFileSync('./input.txt', 'utf8');
let index = 0

function main(){
    const salario_atual = obter_numero_positivo('Digite o salário atual:')

    const reajuste = calcular_reajuste(salario_atual)
    const novo_salario = salario_atual + reajuste
    const percentual_do_reajuste = calcular_percentual_do_reajuste(salario_atual)

    mostrar_texto(`Novo salario: ${novo_salario.toFixed(2)}`)
    mostrar_texto(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    mostrar_texto(`Em percentual: ${percentual_do_reajuste} %`)
}


function mostrar_texto(texto){
    return console.log(texto)
}


function obter_numero_positivo(label = 'Digite um número positivo: '){
    let numero = Number(lines[index++])

    while(numero <= 0){
        mostrar_texto('Favor digitar um valor positivo!')
        numero = Number(lines[index++])
    }

    return numero
}


function calcular_reajuste(salario){
    if(salario > 0 && salario <= 400){
        return salario * 0.15
    }else if(salario <= 800){
        return salario * 0.12
    }else if(salario <= 1200){
        return salario * 0.1
    }else if(salario <= 2000){
        return salario * 0.07
    }else{
        return salario * 0.04
    }
}


function calcular_percentual_do_reajuste(salario){
    if(salario > 0 && salario <= 400){
        return 15
    }else if(salario <= 800){
        return 12
    }else if(salario <= 1200){
        return 10
    }else if(salario <= 2000){
        return 7
    }else{
        return 4
    }
}


main()