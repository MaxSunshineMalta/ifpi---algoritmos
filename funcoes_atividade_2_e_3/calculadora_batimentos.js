import { question } from "readline-sync";

function main (){
    const idade = Number(question('Idade:'))
    const freq_cardiaca_maxima = calcular_freq_cardiaca_maxima(idade)
    const faixa_batimentos_cardiacos_ideais_50 = calcular_faixa_batimentos_cardiacos_ideais_50(freq_cardiaca_maxima)
    const faixa_batimentos_cardiacos_ideais_70 = calcular_faixa_batimentos_cardiacos_ideais_70(freq_cardiaca_maxima)
    const faixa_batimentos_cardiacos_ideais_85 = calcular_faixa_batimentos_cardiacos_ideais_85(freq_cardiaca_maxima)

    console.log('Faixa de batimentos cardíacos ideais para atividades físicas:')
    console.log('Moderadas:', faixa_batimentos_cardiacos_ideais_50,'a', faixa_batimentos_cardiacos_ideais_70)
    console.log('Intensivas:', faixa_batimentos_cardiacos_ideais_70,'a', faixa_batimentos_cardiacos_ideais_85)
}

function calcular_freq_cardiaca_maxima(idade){
    const frequencia_cardiaca_maxima = (220 - idade)
    return frequencia_cardiaca_maxima
}

function calcular_faixa_batimentos_cardiacos_ideais_50(frequencia_cardiaca_maxima){
    const faixa_batimentos_cardiacos_ideais_cinquenta = (frequencia_cardiaca_maxima * 0.5)
    return faixa_batimentos_cardiacos_ideais_cinquenta
}

function calcular_faixa_batimentos_cardiacos_ideais_70(frequencia_cardiaca_maxima){
    const faixa_batimentos_cardiacos_ideais_setenta = (frequencia_cardiaca_maxima * 0.7)
    return faixa_batimentos_cardiacos_ideais_setenta
}

function calcular_faixa_batimentos_cardiacos_ideais_85(frequencia_cardiaca_maxima){
    const faixa_batimentos_cardiacos_ideais_oitenta_e_cinco = (frequencia_cardiaca_maxima * 0.85)
    return faixa_batimentos_cardiacos_ideais_oitenta_e_cinco
}

main ()