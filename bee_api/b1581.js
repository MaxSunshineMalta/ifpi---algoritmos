import { question } from "readline-sync";

function main(){
    const qtd_de_testes = obter_numero_inteiro_positivo('Digite a quantidade de casos teste:')
    
    for(let i = 0; i < qtd_de_testes; i++){
        const qtd_de_pessoas_no_grupo = obter_numero_de_pessoas_no_grupo('Digite a quantidade de pessoas no grupo:')
        let lingua_a_ser_usada = ''
        for(let i = 0; i < qtd_de_pessoas_no_grupo; i++){
            const lingua_nativa = obter_texto('Digite a lingua nativa:')
            if(i === 0){
                lingua_a_ser_usada = lingua_nativa
            }
            if(i > 0){
                lingua_a_ser_usada = lingua_a_ser_usada === lingua_nativa ? lingua_nativa : 'ingles'
            }
        }
        mostrar_texto(lingua_a_ser_usada)
    }
}


function mostrar_texto(texto){
    return console.log(texto)
}


function obter_texto(label = 'Digite um texto: '){
    const texto = question(label)

    return texto
}


function obter_numero_inteiro_positivo(label = 'Digite um número:'){
    let numero = Number(question(label))
    let candidato = (numero * 10) % 10

    while(candidato !== 0 || numero <= 0){
        mostrar_texto('Favor digite um valor válido!')
        numero = Number(question(label))
        candidato = (numero * 10) % 10
    }

    return numero
}

function obter_numero_de_pessoas_no_grupo(label = 'Digite um número:'){
    let numero = Number(question(label))
    let candidato = (numero * 10) % 10

    while(candidato !== 0 || numero < 2 || numero > 100){
        mostrar_texto('Favor digite um valor válido!')
        numero = Number(question(label))
        candidato = (numero * 10) % 10
    }

    return numero
}

main()