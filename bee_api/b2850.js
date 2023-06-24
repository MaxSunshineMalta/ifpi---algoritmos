import { question } from "readline-sync";

function main(){
    let parada = 'nao'
    
    while(parada === 'nao'){
        
        const situacao_de_elevacao_da_perna_do_papagaio = obter_situacao_valida()
    
        const linguagem_do_papagaio = definir_linguagem_do_papagaio(situacao_de_elevacao_da_perna_do_papagaio)

        mostrar_texto(linguagem_do_papagaio)
        parada = obter_texto('Deseja parar?')
    }
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