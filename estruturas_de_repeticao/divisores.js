import { question, questionPath } from "readline-sync";

function main(){
    let numero = Number(question('numero:'))

    while( numero !== 0){
        mostrar_divisores(numero)
        numero = Number(question('numero:'))
    }
}


function mostrar_divisores(numero){
    let candidato = numero
    
    while(candidato >= 1){
        if(numero % candidato === 0){
            console.log(`> ${candidato}`)
        }
        candidato--
    }
}


main()