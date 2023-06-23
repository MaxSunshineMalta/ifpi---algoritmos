import { question } from "readline-sync";

function main(){
    const quadril = Number(question('Quadril(cm):'))
    const altura = Number(question('Altura(cm):')) / 100
    
    const altura_m = calcular_altura_m(altura)
    const iac = calcular_iac(quadril, altura)

    console.log('Seu IAC é:', Math.floor(iac))
    const quadril_minimo = calculular_quadril_minimo(altura)
    const quadril_maximo = calculular_quadril_maximo(altura)

    console.log('Para fica na faixa normal:')
    console.log('Quadril mínimo:', Math.floor(quadril_minimo),'cm')
    console.log('Quadril máximo:', Math.floor(quadril_maximo),'cm')
}

function calcular_altura_m(altura){
    const altura_metros = (altura / 100)
    return altura_metros
}

function calcular_iac(quadril, altura_metros){
    const i_a_c = (quadril / (altura_metros * Math.sqrt(altura_metros))) - 18
    return i_a_c
}

function calculular_quadril_minimo(altura_metros){
    const quadril_min = ((9 +18) * (altura_metros * Math.sqrt(altura_metros)))
    return quadril_min
}

function calculular_quadril_maximo(altura_metros){
    const quadril_max = ((20.9 + 18) * (altura_metros * Math.sqrt(altura_metros)))
    return quadril_max
}


main()