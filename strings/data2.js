import { mostrar_texto, obter_texto } from './my_io_utils.js' 

//Leia uma data no formato DD/MM/AAAA e escreva o mês por extenso (DD de mês de AAAA).
function main(){
    const data = obter_texto('Digite uma data no formato DD/MM/AAAA:')
    
    const [dia, mes, ano] = data.split('/').map(Number)
    const mes_escrito = calcular_mes(mes)

    mostrar_texto(`${dia} de ${mes_escrito} de ${ano}`)
}

function calcular_mes(mes){
    if(mes === 1){
        return 'Janeiro'
    }else if(mes === 2){
        return 'Fevereiro'
    }else if(mes === 3){
        return 'Março'
    }else if(mes === 4){
        return 'Abril'
    }else if(mes === 5){
        return 'Maio'
    }else if(mes === 6){
        return 'Junho'
    }else if(mes === 7){
        return 'Julho'
    }else if(mes === 8){
        return 'Agosto'
    }else if(mes === 9){
        return 'Setembro'
    }else if(mes === 10){
        return 'Outubro'
    }else if(mes === 11){
        return 'Novembro'
    }else{
        return 'Dezembro'
    }
}

main()