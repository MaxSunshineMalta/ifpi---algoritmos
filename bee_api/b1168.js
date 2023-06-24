import { question } from "readline-sync";

function main(){
    const qtd_de_testes = obter_numero_valido(`Digite a quantidade de casos testes desejada:`)

    for(let i = 0; i < qtd_de_testes; i++){
        const numero_em_led = obter_numero_em_led_valido('Digite o número que deseja obter em led:')
        const numero_de_leds_usados = calcular_numero_de_leds_usados(numero_em_led)
        
        mostrar_texto(`${numero_de_leds_usados} leds`)
    }
}


function calcular_numero_de_leds_usados(numero){
    let qtd_de_leds_usados = 0

    for (let algarismo of numero){
        if(algarismo === '0' || algarismo === '6' ||algarismo === '9'){
            qtd_de_leds_usados = qtd_de_leds_usados + 6
        }else if(algarismo === '1'){
            qtd_de_leds_usados = qtd_de_leds_usados + 2
        }else if(algarismo === '2'|| algarismo === '3'|| algarismo === '5'){
            qtd_de_leds_usados = qtd_de_leds_usados + 5
        }else if(algarismo === '4'){
            qtd_de_leds_usados = qtd_de_leds_usados + 4
        }else if(algarismo === '7'){
            qtd_de_leds_usados = qtd_de_leds_usados + 3
        }else if(algarismo === '8'){
            qtd_de_leds_usados = qtd_de_leds_usados + 7
        }
    }

    return qtd_de_leds_usados
}


function mostrar_texto(texto){
    return console.log(texto)
}


function obter_numero_valido(label = 'Digite um número:'){
    let numero = question(label)
    return numero
}


function obter_numero_em_led_valido(label = 'Digite um número:'){
    let numero = question(label)

    return numero
}

main()

