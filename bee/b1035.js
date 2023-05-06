import { question } from "readline-sync";

function main(){
    const num1 = obter_numero_inteiro('Digite um número:')
    const num2 = obter_numero_inteiro('Digite um número:')
    const num3 = obter_numero_inteiro('Digite um número:')
    const num4 = obter_numero_inteiro('Digite um número:')

    const soma_do_primeiro_e_segundo = num1 + num2
    const soma_do_terceiro_e_quarto = num3 + num4

    const situacao = verificar_situacao(num1, num2, num3, num4, soma_do_primeiro_e_segundo, soma_do_terceiro_e_quarto)

    mostrar_texto(situacao)
}



function mostrar_texto(texto){
    return console.log(texto)
}


function obter_numero_inteiro(label = 'Digite um número inteiro:'){
    let numero = Number(question(label))
    let candidato = (numero * 10) % 10
    
    while (candidato !== 0){
        mostrar_texto('Favor digite um número inteiro!')
        numero = Number(question(label))
        candidato = (numero * 10) % 10
    }

    return numero
}


function verificar_situacao(num1, num2, num3, num4, soma_do_primeiro_e_segundo, soma_do_terceiro_e_quarto){
    if (num2_maior_que_num3(num2, num3) && num4_maior_que_num1(num4, num1) && soma2_maior_que_soma1(soma_do_terceiro_e_quarto, soma_do_primeiro_e_segundo) && num3_e_num4_positivos(num3, num4) && num1_par(num1)){
        return 'Valores aceitos'
    }else{
        return 'Valores nao aceitos'
    }
}

function num2_maior_que_num3(n2, n3){
    return n2 > n3
}


function num4_maior_que_num1(n4, n1){
    return n4 > n1
}


function soma2_maior_que_soma1(soma2, soma1){
    return soma2 > soma1
}


function num3_e_num4_positivos(n3, n4){
    return n3 > 0 && n4 > 0
}


function num1_par(n1){
    return n1 % 2 === 0
}

main()