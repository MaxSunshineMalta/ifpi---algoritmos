import {readFileSync} from 'fs'
var lines = readFileSync('./input.txt', 'utf8').split('\r\n');
let index = 0 

function main(){
    const limite = lines[index++].split(' ').map(Number)
    const colecao = lines[index++].split(' ').map(Number)
    let numero_que_falta = 0
    
    for(let i = 1; i <= limite; i++){
        if(!(contem(i, colecao))){
            numero_que_falta = i
        }
    }

    console.log(numero_que_falta)
}


function contem(numero, colecao){
    for(let item of colecao){
        if(item === numero){
            return true
        }else{
            return false
        }
    }
}


main()