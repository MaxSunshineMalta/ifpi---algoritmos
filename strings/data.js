import { mostrar_texto, obter_texto } from './my_io_utils.js' 

//Leia uma data no formato DD/MM/AAAA e escreva o mês por extenso (DD de mês de AAAA).
function main(){
    const data = obter_texto('Digite uma data no formato DD/MM/AAAA:')
    const data_separada = data.split('/')
    const dia = calcular_dia(data_separada)
    const mes = calcular_mes(data)
    const ano = calcular_ano(data_separada)

    mostrar_texto(`${dia} de ${mes} de ${ano}`)
}


function calcular_dia(data){
    return data[0]
}


function calcular_mes(data){
    const mes = data.split('/').map(Number)
    
    if( mes[1] === 1){
        return 'Janeiro'
    }else if(mes[1] === 2){
        return 'Fevereiro'
    }else if(mes[1] === 3){
        return 'Março'
    }else if(mes[1] === 4){
        return 'Abril'
    }else if(mes[1] === 5){
        return 'Maio'
    }else if(mes[1] === 6){
        return 'Junho'
    }else if(mes[1] === 7){
        return 'Julho'
    }else if(mes[1] === 8){
        return 'Agosto'
    }else if(mes[1] === 9){
        return 'Setembro'
    }else if(mes[1] === 10){
        return 'Outubro'
    }else if(mes [1]=== 11){
        return 'Novembro'
    }else{
        return 'Dezembro'
    }
}


function calcular_ano(data){
    return data[2]
}

main()