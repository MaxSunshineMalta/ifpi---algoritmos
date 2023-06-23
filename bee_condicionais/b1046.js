import {readFileSync} from  'fs'

var lines = readFileSync('./input.txt', 'utf8').split('\r\n')
let index = 0

function main(){
    const [hora_de_inicio, hora_de_termino] = lines[index++].split(' ').map(Number)
    
    const horas = calcular_horas(hora_de_inicio, hora_de_termino)

    mostrar_texto(`O JOGO DUROU ${horas} HORAS`)
    
}


function mostrar_texto(texto){
    return console.log(texto)
}


function calcular_horas(hora_de_inicio, hora_de_termino){
    if (hora_de_termino > hora_de_inicio){
        const tempo_total = hora_de_termino - hora_de_inicio
        return tempo_total
    }else{
        const horas_ate_meia_noite = 24 - hora_de_inicio
        const tempo_total = horas_ate_meia_noite + hora_de_termino
        return tempo_total
    }
}

main()