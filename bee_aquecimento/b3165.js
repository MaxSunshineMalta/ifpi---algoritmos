import { question, questionNewPassword } from "readline-sync"

function main(){
    const numero = obter_numero_inteiro_valido('Digite um número:')

    const primo_menor_igual = calcular_primo_menor_ou_igual(numero)
    const primo_maior = calcular_primo_maior(numero)

    const primo_gemeo_mais_a_frente = calcular_primo_gemeo_mais_a_frente(primo_maior)
    const primo_gemeo_mais_atras = calcular_primo_gemeo_mais_atras(primo_menor_igual)

    const soma_ou_sub_pg = calcular_se_soma_ou_sub(primo_gemeo_mais_a_frente)
    const sum_ou_sub_pg = calcular_se_sum_ou_sub(primo_gemeo_mais_atras)

    if(numero - primo_gemeo_mais_atras < primo_gemeo_mais_a_frente - numero && sum_ou_sub_pg < primo_gemeo_mais_atras){
    mostrar_texto(`${sum_ou_sub_pg} ${primo_gemeo_mais_atras}`)
    }else if(numero - primo_gemeo_mais_atras < primo_gemeo_mais_a_frente - numero && sum_ou_sub_pg > primo_gemeo_mais_atras){
        mostrar_texto(`${primo_gemeo_mais_atras} ${sum_ou_sub_pg}`)
    }else if(numero - primo_gemeo_mais_atras > primo_gemeo_mais_a_frente - numero && soma_ou_sub_pg < primo_gemeo_mais_a_frente){
        mostrar_texto(`${soma_ou_sub_pg} ${primo_gemeo_mais_a_frente}`)
    }else if(numero - primo_gemeo_mais_atras > primo_gemeo_mais_a_frente - numero && soma_ou_sub_pg > primo_gemeo_mais_a_frente){
        mostrar_texto(`${primo_gemeo_mais_a_frente} ${soma_ou_sub_pg}`)
    }
}


function calcular_se_soma_ou_sub(pg_maior){
    if(eh_primo(pg_maior + 2)){
        return pg_maior + 2
    }else if(eh_primo(pg_maior - 2)){
        return pg_maior - 2
    }
}


function calcular_se_sum_ou_sub(pg_menor_igual){
    if(eh_primo(pg_menor_igual + 2)){
        return pg_menor_igual + 2
    }else if(eh_primo(pg_menor_igual - 2)){
        return pg_menor_igual - 2
    }
}


function calcular_primo_gemeo_mais_atras(numero){
    let pg = numero
    let candidato = numero

    while(!(eh_primo(candidato + 2) ||eh_primo(candidato - 2))){
        pg = calcular_primo_menor_ou_igual(candidato)
        candidato--
    }

    return pg
}


function calcular_primo_gemeo_mais_a_frente(numero){
    let pg = 0
    let candidato = numero

    while(!(eh_primo(candidato + 2) ||eh_primo(candidato - 2))){
        pg = calcular_primo_maior(candidato)
        candidato++
    }

    return pg
}


function calcular_primo_menor_ou_igual(numero){
    let fim = numero
    let primo_menor_ou_igual = 0
    
    for(let i = 5; i <= numero; i++){
        if(eh_primo(i)){
            primo_menor_ou_igual = i
        }
    }

    return primo_menor_ou_igual
}


function calcular_primo_maior(numero){
    let fim = 1000
    let primo_maior_igual = 0

    for(let i = numero; i <= fim; i++){
        if(eh_primo(i)){
            primo_maior_igual = i
            break
        }
    }

    return primo_maior_igual
}


function eh_primo(numero){
    return qtd_de_dividores(numero) === 2
}


function qtd_de_dividores(numero){
    let qtd_de_divisores = 0

    for(let candidato = numero; candidato >= 1; candidato--){
        if(numero % candidato === 0){
            qtd_de_divisores++
        }
    }

    return qtd_de_divisores
}


function mostrar_texto(texto){
    return console.log(texto)
}


function obter_numero_inteiro_valido(){
    let numero = Number(question('Digite um número:'))
    let candidato = (numero * 10) % 10

    while(candidato !== 0 || numero < 5 || numero > 1000){
        mostrar_texto('Favor digite um número válido!')
        numero = Number(question('Digite um número:'))
        candidato = (numero * 10) % 10
    }

    return numero
}


main()