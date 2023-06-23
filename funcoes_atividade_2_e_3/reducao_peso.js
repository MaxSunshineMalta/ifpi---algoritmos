import { question } from "readline-sync";

function main(){
    const peso_atual = Number(question('Peso atual(Kg):'))
    const perc_reducao = Number(question('Quanto a perder (%):'))
    const semanas = Number(question('Quantas semanas:'))

    const peso_a_reduzir = calcular_peso_a_reduzir(peso_atual, perc_reducao)
    const calorias_a_reduzir = converter_peso_em_calorias(peso_a_reduzir)
    const qtd_dias = converter_semanas_em_dias(semanas)

    const deficit_diario = calorias_a_reduzir / qtd_dias
    console.log('Deficit diario necessário:', deficit_diario.toFixed(2))

    const consumo_diario = Number(question('Quanto desejar consumir por dia (kcal): '))
    const gasto_diario = consumo_diario + deficit_diario
    console.log('Gasto de Kcal diárias:', gasto_diario.toFixed(2))
}

function calcular_peso_a_reduzir(peso_atual, perc_reducao){
    const peso_a_reduzir = peso_atual * (perc_reducao / 100)
    return peso_a_reduzir
}

function converter_peso_em_calorias(peso_a_reduzir){
    const calorias = peso_a_reduzir * 7700
    return calorias
}

function converter_semanas_em_dias(semanas){
    const dias = semanas * 7
    return dias
}

main()
