import {readFileSync} from 'fs'
var lines = readFileSync('./input.txt', 'utf8').split('\r\n');
function main() {  
    const partidas = lines
  
    // console.log(partidas)
    let index = 0
    let partida_atual = Number(partidas[index])
    let contador = 1
  
    while ( partida_atual != 0 ){
      
      console.log(`Teste ${contador}`)  
      // console.log('rodada atual', partida_atual)  
      let cartas_aldo = 0
      let cartas_beto = 0
  
      for( let rodada = 1; rodada <= partida_atual; rodada++  ){      
        const cartas_rodada = partidas[index+rodada].split(' ').map(Number)
  
        cartas_aldo += cartas_rodada[0]
        cartas_beto += cartas_rodada[1]
      }
  
      if( cartas_aldo > cartas_beto ){
        console.log('Aldo\n')
      } else {
        console.log('Beto\n')
      }
  
      contador++
      index += partida_atual + 1
      partida_atual = Number(partidas[index])
    }
  
  }
  
  main()