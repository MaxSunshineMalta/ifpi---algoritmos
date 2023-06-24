import { question } from "readline-sync";

function main(){
    //Estado anterior
    let numero = Number(question('Número:'))
    let somatorio = 0
    let quantidade = 0
    //Condição de continuidade
    while (numero >= 0){
        //Trabalho 
        somatorio = somatorio + numero
        quantidade = quantidade + 1
        //Convergência dos dados/estado
        numero = Number(question('Número:')) 
    }
    //Média
    if(quantidade > 0){
        const media = somatorio / quantidade
        console.log(`${quantidade} números positivos foram digitados, obtendo a média: ${media.toFixed(2)}`)
    }
    else{
        console.log('Você não digitou valores válidos')
    }
    console.log('Fim...')
}

main()