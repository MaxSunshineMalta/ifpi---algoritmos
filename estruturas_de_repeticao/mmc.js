import { question } from "readline-sync";

function main(){
    const num_a = Number(question('Número A:'))
    const num_b = Number(question('Número B:'))
    const mmc = calcular_mmc(num_a, num_b)
    console.log(`MMC: ${mmc}`)
}

function calcular_mmc(a, b){
    const maior = a > b ? a : b
    let mmc = maior

    while (!(mmc % a === 0 && mmc % b === 0)){
        mmc = mmc + maior
    }
    return mmc
}

main()

//escopo de variaveis, declaração