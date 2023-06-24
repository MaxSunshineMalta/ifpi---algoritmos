import { question } from "readline-sync";

function main(){
    const situacao_de_elevacao_da_perna_do_papagaio = obter_situacao_valida()
    const situacao_de_elevacao_da_perna_do_papagaio1 = obter_situacao_valida()
    const situacao_de_elevacao_da_perna_do_papagaio2 = obter_situacao_valida()
    const situacao_de_elevacao_da_perna_do_papagaio3 = obter_situacao_valida()

    const linguagem_do_papagaio = definir_linguagem_do_papagaio(situacao_de_elevacao_da_perna_do_papagaio)
    const linguagem_do_papagaio1 = definir_linguagem_do_papagaio(situacao_de_elevacao_da_perna_do_papagaio)
    const linguagem_do_papagaio2 = definir_linguagem_do_papagaio(situacao_de_elevacao_da_perna_do_papagaio)
    const linguagem_do_papagaio3 = definir_linguagem_do_papagaio(situacao_de_elevacao_da_perna_do_papagaio)

    mostrar_texto(linguagem_do_papagaio)
    mostrar_texto(linguagem_do_papagaio1)
    mostrar_texto(linguagem_do_papagaio2)
    mostrar_texto(linguagem_do_papagaio3)
}


function obter_situacao_valida(label = 'Qual a situação da perna do papagaio?'){
    let situacao = obter_texto(label)

    while(situacao !== 'esquerda' && situacao !== 'direita' && situacao !== 'nenhuma' && situacao !== 'as duas'){
        mostrar_texto('Favor digite uma situação válida!')
        situacao = obter_texto(label)
    }

    return situacao
}


function definir_linguagem_do_papagaio(situacao){
    if(situacao === 'esquerda'){
        return 'ingles'
    }else if(situacao === 'direita'){
        return 'frances'
    }else if(situacao === 'nenhuma'){
        return 'portugues'
    }else{
        return 'caiu'
    }
}

function obter_texto(label = 'Digite um texto:'){
    const texto = question(label)

    return texto
}


function mostrar_texto(texto){
    return console.log(texto)
}

main()