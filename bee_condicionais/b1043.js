import { readFileSync} from 'fs'

var input = readFileSync('./input.txt', 'utf8').split('\r\n');
let index = 0

function main(){
    const [lado1, lado2, lado3] = input[index++].split(' ').map(Number)
   
    if(forma_triangulo(lado1, lado2, lado3)){
        const perimetro = lado1 + lado2 + lado3
        console.log(`Perimetro = ${perimetro.toFixed(1)}`)
    }else{
        const area = ((lado1 + lado2) * lado3) / 2
        console.log(`Area = ${area.toFixed(1)}`)
    }
}


function forma_triangulo(l1, l2, l3){
    return l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1
}


main()