
import { question } from "readline-sync";

function main(){
    const num_a = Number(question('Número A:'))
    const num_b = Number(question('Número B:'))

    let maior = num_a > num_b ? num_a : num_b
    let mmc = maior

    while(true){
        if (mmc % num_a === 0 && mmc % num_b === 0){
            break
        }
        mmc = mmc + maior
    
}
    console.log(`MMC: ${mmc}`)

}

main()