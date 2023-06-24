import {readFileSync} from 'fs'
var lines = readFileSync('./input.txt', 'utf8').split('\r\n');
let index = 0 

function main(){
    const qtd_partidas = lines
    let partida_atual = Number(qtd_partidas[index])
    let contador = 1

    while(partida_atual !== 0){
        console.log(`Teste ${contador}`)

        for(let i = index + 3; i < index + 3 + partida_atual;i++ ){
            const participante_1 = qtd_partidas[index + 1]
            const participante_2 = qtd_partidas[index + 2]
            const [p1, p2] = lines[i].split(' ').map(Number)
            const pontos = p1 + p2
            
            if(pontos % 2 === 0){
                console.log(`${participante_1}`)
            }else{
                console.log(`${participante_2}`)
            }
        } 

        contador++
        index+= 3 + partida_atual
        partida_atual = Number(qtd_partidas[index])
        if(partida_atual !== 0){
            console.log()
        }
    }
    console.log()
}

main()