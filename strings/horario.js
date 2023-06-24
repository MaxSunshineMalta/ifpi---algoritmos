import { mostrar_texto, obter_texto } from './my_io_utils.js'

function main(){
    const horario = obter_texto(`Digite o horário no formato hh:mm:ss :`)

    const [horas, minutos, segundos] = horario.split(':').map(Number)

    mostrar_texto(`${horas} hora(s), ${minutos} minuto(s) e ${segundos} segundo(s)`)
}

main()