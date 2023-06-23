import { question } from "readline-sync";

function main(){
    const a = Number(question('A:'))
    const b = Number(question('B:'))
    const c = Number(question('C:'))

    const R = calcular_R(a, b)
    const S = calcular_S(b,c)
    const D = calcular_D(R, S)
    
    saida(D)
}

function calcular_R(a, b){
    const R = ((a + b) ** 2)
    return R
}

function calcular_S(b, c){
    const S = ((b + c) **2)
    return S
}

function calcular_D(R, S){
    const D = ((R + S) / 2)
    return D
}

function saida(D){
    console.log('D:', D.toFixed(2))
}

main()