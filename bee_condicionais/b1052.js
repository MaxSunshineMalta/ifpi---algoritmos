import { question } from "readline-sync";

function main(){
    const mes_em_numero = obter_mes_valido()

    const nome_do_mes = definir_nome_do_mes(mes_em_numero)

    mostrar_texto(nome_do_mes)
}


function mostrar_texto(texto){
    return console.log(texto)
}


function obter_mes_valido(label = 'Digite o número correspondente ao mês:'){
    let candidato_a_mes = Number(question(label))

    while(candidato_a_mes < 0 || candidato_a_mes > 12){
        mostrar_texto('Favor digite um número de mês válido!')
        candidato_a_mes = Number(question(label))
    }

    return candidato_a_mes
}


function definir_nome_do_mes(mes){
    if(mes === 1){
        return 'January'
    }else if(mes === 2){
        return 'February'
    }else if(mes === 3){
        return 'March'
    }else if(mes === 4){
        return 'April'
    }else if(mes === 5){
        return 'May'
    }else if(mes === 6){
        return 'June'
    }else if(mes === 7){
        return 'July'
    }else if(mes === 8){
        return 'August'
    }else if(mes === 9){
        return 'September'
    }else if(mes === 10){
        return 'October'
    }else if(mes === 11){
        return 'November'
    }else{
        return 'December'
    }
}

main()