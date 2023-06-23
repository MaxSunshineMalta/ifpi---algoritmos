import { question } from "readline-sync";

function main(){
    const anos = Number(question('Anos:'))
    const meses = Number(question('Meses:'))
    const dias = Number(question('Dias:'))

    const anos_para_dias = calcular_anos_para_dias(anos)
    const meses_para_dias = calcular_meses_para_dias(meses)
    const dias_totais = calcular_dias_totais(anos_para_dias, meses_para_dias, dias)

    saida (dias_totais)
}

function calcular_anos_para_dias(anos){
    const anos_para_dias = (anos * 365)
    return anos_para_dias
}

function calcular_meses_para_dias(meses){
    const meses_para_dias = (meses * 30)
    return meses_para_dias
}

function calcular_dias_totais(anos_para_dias, meses_para_dias, dias){
    const dias_totais = (anos_para_dias + meses_para_dias + dias)
    return dias_totais
}

function saida(dias_totais){
    console.log(dias_totais, 'Dias')
}

main()