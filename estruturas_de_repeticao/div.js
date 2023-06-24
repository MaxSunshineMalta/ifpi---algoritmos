import { question } from "readline-sync";

function main(){
    let numero = Number(question('Numero:'))

    while ( numero !== 0){
        console.log('=====DIVISORES=====')
        mostrar_divisores(numero)

        numero = Number(question('Numero:'))
    }

}


function mostrar_divisores(numero){
    let candidato = 1

    while (candidato < numero){
        if( numero % candidato === 0){
            console.log(`${candidato}`)
        }
    candidato++
    }
}


main()