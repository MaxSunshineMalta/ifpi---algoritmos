import {readFileSync} from 'fs'
var lines = readFileSync('./input.txt', 'utf8').split('\r\n');
let index = 0

function main(){
    const dia_inicial = lines[index++].split(' ').filter(item => item !== 'Dia').map(Number)
    const [hora_de_inicio, minuto_de_inicio, segundo_de_inicio] = lines[index++].split(' : ').map(Number)
    console.log(hora_de_inicio, minuto_de_inicio, segundo_de_inicio)
}

main()