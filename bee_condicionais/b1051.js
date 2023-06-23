import { question } from "readline-sync";

function main(){
    const salario = obter_numero_positivo('Digite o seu salário:')

    const impostos = calcular_valor_pago_em_impostos(salario)

    if(eh_isento(salario)){
        mostrar_texto('Isento')
    }else{
        mostrar_texto(impostos.toFixed(2))
    }
}


function mostrar_texto(texto){
    return console.log(texto)
}


function obter_numero_positivo(label = 'Digite um número positivo: '){
    let numero = Number(question(label))

    while(numero <= 0){
        mostrar_texto('Favor digitar um valor positivo!')
        numero = Number(question(label))
    }

    return numero
}


function eh_isento(salario){
    return salario <= 2000
}


function calcular_valor_pago_em_impostos(salario){
    if(salario <= 3000){
        const impostos = (salario - 2000) * 0.08
        return impostos
    }else if(salario <= 4500){
        const impostos = 1000 * 0.08 + (salario - 3000) * 0.18
        return impostos
    }else{
        const impostos = 1000 * 0.08 + 1500 * 0.18 + (salario - 4500) * 0.28
        return impostos
    }
}

main()