import { question } from "readline-sync";

function main(){
    const r1 = obter_r1_valido()
    const x1 = obter_numero_em_modulo()
    const y1 = obter_numero_em_modulo()
    const r2 = obter_numero_menor_ou_igual_a_mil()
    const x2 = obter_numero_em_modulo()
    const y2 = obter_numero_menor_ou_igual_a_mil()

    const distancia_dos_centros = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

    const situacao = verificar_situacao(distancia_dos_centros, r1, r2)
        
    mostrar_texto(situacao)
}


function mostrar_texto(texto){
    return console.log(texto)
}


function obter_numero_em_modulo(label = 'Digite um número:'){
    const numero = Number(question(label))
    return Math.abs(numero)
}


function obter_r1_valido(label = 'Digite um número:'){
    let numero = Number(question(label))
    
    while (numero < 1){
        mostrar_texto('Favor digite um número maior ou igual a um!')
        numero = Number(question(label))
    }

    return numero
}


function obter_numero_menor_ou_igual_a_mil(label = 'Digite um número:'){
    let numero = Number(question(label))
    
    while (numero > 1000){
        mostrar_texto('Favor digite um número menor ou igual a mil!')
        numero = Number(question(label))
    }

    return numero
}


function verificar_situacao(distancia, r1, r2){
    if(distancia + r2 <= r1){
        return 'RICO'
    }else{
        return 'MORTO'
    }
}

main()