import { question } from "readline-sync";

function main(){
    while(lines.length !== 0){

    let situacao_de_elevacao_da_perna_do_papagaio = lines.shift().trim()
    
    const linguagem_do_papagaio = definir_linguagem_do_papagaio(situacao_de_elevacao_da_perna_do_papagaio)

    console.log(linguagem_do_papagaio)
    }   
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

main()