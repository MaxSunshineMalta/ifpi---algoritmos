import {readFileSync} from 'fs'
var lines = readFileSync('./input.txt', 'utf8').split('\r\n')
let index = 0

function main(){
    const [hora_de_inicio, minuto_de_inicio, hora_de_termino, minuto_de_termino] = lines[index++].split(' ').map(Number)

    const duracao = calcular_duracao_do_jogo(hora_de_inicio, minuto_de_inicio, hora_de_termino, minuto_de_termino)
}


function mostrar_texto(texto){
    return console.log(texto)
}


function calcular_duracao_do_jogo(hi, mi, ht, mt){
    if(ht === hi + 1 && mt < mi){
        const horas = 0
        const minutos = 60 - mi + mt
        return mostrar_texto(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)        
    }else if(ht > hi && mt > mi){
        const horas = ht - hi
        const minutos = mt - mi
        return mostrar_texto(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
    }else if(ht > hi && mt === mi){
        const horas = ht - hi
        const minutos = mt - mi
        return mostrar_texto(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
    }else if(ht > hi && mt < mi){
        const horas = ht - hi - 1
        const minutos = 60 - mi + mt
        return mostrar_texto(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
    }else if(ht < hi && mt > mi){
        const horas_ate_meia_noite = 24 - hi
        const horas = horas_ate_meia_noite + ht
        const minutos = mt - mi
        return mostrar_texto(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
    }else if(ht < hi && mt === mi){
        const horas_ate_meia_noite = 24 - hi
        const horas = horas_ate_meia_noite + ht
        const minutos = mt - mi
        return mostrar_texto(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
    }else if(ht < hi && mt < mi){
        const horas_ate_meia_noite = 24 - hi
        const horas = horas_ate_meia_noite + ht - 1
        const minutos = 60 - mi + mt
        return mostrar_texto(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
    }else if(ht === hi && mt > mi){
        const horas = ht - hi
        const minutos = mt - mi
        return mostrar_texto(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
    }else if(ht === hi && mt === mi){
        const horas_ate_meia_noite = 24 - hi
        const horas = horas_ate_meia_noite + ht 
        const minutos = mt - mi
        return mostrar_texto(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
    }else if(ht === hi && mt < mi){
        const horas_ate_meia_noite = 24 - hi
        const horas = horas_ate_meia_noite + ht - 1
        const minutos = 60 - mi + mt
        return mostrar_texto(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
    }
}


main()
