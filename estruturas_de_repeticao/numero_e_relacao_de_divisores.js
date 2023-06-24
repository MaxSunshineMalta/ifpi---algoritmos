import { question } from "readline-sync";

function main(){
    let numero = Number(question('Número:'))


    while(numero !== 0){
        console.log(`Os divisores do número ${numero} são:`)
        for(let i = 1; i <= numero; i++){
            if (numero % i === 0){
                console.log(i)
                
            }
        }
        numero = Number(question('Número:'))
    }


}

main()