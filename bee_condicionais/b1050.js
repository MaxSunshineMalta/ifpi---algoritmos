import { question } from "readline-sync";

function main(){
    const ddd = obter_numero_positivo('Digite o DDD:')
    
    const cidade = informar_cidade_correspondente(ddd)

    mostrar_texto(cidade)
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


function informar_cidade_correspondente(ddd){
    if(ddd === 61){
        return 'Brasilia'
    }else if(ddd === 71){
        return 'Salvador'
    }else if(ddd === 11){
        return 'Sao Paulo'
    }else if(ddd === 21){
        return 'Rio de Janeiro'
    }else if(ddd === 32){
        return 'Juiz de Fora'
    }else if(ddd === 19){
        return 'Campinas'
    }else if(ddd === 27){
        return 'Vitoria'
    }else if(ddd === 31){
        return 'Belo Horizonte'
    }else{
        return 'DDD nao cadastrado'
    }
}

main()