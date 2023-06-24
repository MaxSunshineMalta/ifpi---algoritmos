import { question } from "readline-sync";

function main(){
    const nome = Number(question('Nome:'))
    console.log('Selecione seu sexo:')
    console.log('1 - Homem')
    console.log('2 - Mulher')
    const sexo = Number(question('Sexo:'))
    const idade = Number(question('Idade:'))
    const peso = Number(question('Peso:'))
    const altura = Number(question('Altura:'))
    const perfil_de_atividade_fisica = Number(question('Perfil de Atividade Física:'))
    const perfil_de_atividade_fisica_classificado = verificar_af_classificado(sexo, perfil_de_atividade_fisica)
    const necessidade_calorica_diaria = calcular_necessidade_calorica_diaria(sexo, idade, perfil_de_atividade_fisica, peso, altura)
    console.log(`Necessidade calórica diária: ${necessidade_calorica_diaria.toFixed(0)}`)
    console.log(`==============================================`)
    console.log(`Selecione uma das opções conforme sua escolha:`)
    console.log(`1 - Ganhar Peso`)
    console.log(`2 - Perder Peso`)
    const ganho_ou_perda = Number(question('Ganho ou Perda?:'))
    const kg_que_deseja_perder_ou_ganhar = Number(question('Quantos kg?:'))
    const qtd_de_semanas = Number(question(`Em quantas semanas?:`))
    const kg_por_semana = calcular_kg_por_semana(kg_que_deseja_perder_ou_ganhar, qtd_de_semanas)
    const kg_por_semana_em_kcal = calcular_kg_por_semana_em_kcal(kg_que_deseja_perder_ou_ganhar, qtd_de_semanas)
    const necessidade_calorica_semanal = calcular_necessidade_calorica_semanal(necessidade_calorica_diaria)
    const comparar_ganho_ou_perda_com_semanal = comp_ganho_ou_perda_com_semanal(kg_por_semana, kg_por_semana_em_kcal, necessidade_calorica_semanal)
    const calorias_a_consumir_diariamente = calcular_calorias_a_consumir_diariamente(ganho_ou_perda, kg_por_semana_em_kcal, necessidade_calorica_semanal)
    const dieta_alimentar_diaria = elaborar_dieta_alimentar_diaria(ganho_ou_perda, kg_por_semana_em_kcal, necessidade_calorica_semanal)
}    

function verificar_af_classificado(sexo, af){
if((sexo === 1) && (af >= 1) && (af <= 1.1)){
    return 'sedentário'
}
else if((sexo === 1) && (af >= 1.11) && (af <= 1.24)){
    return 'pouco ativo'
}
else if((sexo ===1) && (af >= 1.25) && (af <= 1.47)){
    return 'ativo'
}
else if((sexo === 1) && (af >= 1.48)){
    return 'muito ativo'
}
else if((sexo === 2) && (af >= 1) && (af <= 1.11)){
    return 'sedentário'
}
else if((sexo === 2) && (af >= 1.12) && (af <= 1.26)){
    return 'pouco ativo'
}
else if((sexo === 2) && (af >= 1.27) && (af <= 1.44)){
    return 'ativo'
}
else if((sexo === 2) && (af >= 1.45)){
    return 'muito ativo'
}
}

function calcular_necessidade_calorica_diaria(sexo, idade, af, peso, altura){
if(sexo == 1){
    const necessidade_calorica_diaria_homem = 662 - (9.53 * idade) + af * (15.91 * peso) + (539.6 * altura)
    return necessidade_calorica_diaria_homem
}
else if(sexo === 2){
    const necessidade_calorica_diaria_mulher = 354 - (6.91 * idade) + af * (9.36 * peso) + (726 * altura)
    return necessidade_calorica_diaria_mulher
}
}

function calcular_kg_por_semana(kg, semanas){
    const kg_por_semana = kg / semanas
    return kg_por_semana
}

function calcular_kg_por_semana_em_kcal(kg, semanas){
    const kg_por_semana = kg / semanas
    const kg_por_semana_em_kcal = kg_por_semana * 7700
    return kg_por_semana_em_kcal

}


function calcular_necessidade_calorica_semanal(necessidade_calorica_diaria){
    const necessidade_calorica_semanal = necessidade_calorica_diaria * 7
    return necessidade_calorica_semanal
}

function comp_ganho_ou_perda_com_semanal(kg_por_semana, kg_por_semana_em_kcal, necessidade_calorica_semanal){
if(kg_por_semana_em_kcal > necessidade_calorica_semanal){
    const diferença = kg_por_semana_em_kcal - necessidade_calorica_semanal
    return console.log(`Deve ganhar ${kg_por_semana}kg/semana, sendo ${diferença.toFixed(0)}kcal maior que a necessidade calórica semanal`)
}
else if(kg_por_semana_em_kcal < necessidade_calorica_semanal){
    const diferença = necessidade_calorica_semanal - kg_por_semana_em_kcal
    return console.log(`Deve perder ${kg_por_semana}kg/semana, sendo ${diferença.toFixed(0)}kcal menor que a necessidade calórica semanal`)
}
}

function calcular_calorias_a_consumir_diariamente(ganho_ou_perda, kg_por_semana_em_kcal, necessidade_calorica_semanal){
if(ganho_ou_perda === 1){
    const ganho = Math.abs((kg_por_semana_em_kcal - necessidade_calorica_semanal) / 7)
    return console.log(`Você deve consumir ${ganho}kcal diárias a mais`)
}
else if(ganho_ou_perda === 2){
    const perda = Math.abs((kg_por_semana_em_kcal - necessidade_calorica_semanal) / 7)
    return console.log(`Você deve consumir ${perda}kcal diárias a menos`)
}
}

function elaborar_dieta_alimentar_diaria(ganho_ou_perda, kg_por_semana_em_kcal, necessidade_calorica_semanal){
if(ganho_ou_perda === 1){
    const ganho = Math.abs((kg_por_semana_em_kcal - necessidade_calorica_semanal) / 7)
    const proteina_em_g = ganho * 100
    const carboidrato_em_g = ganho * 100
    const gordura_em_g = (ganho * 200) / 9
    return console.log(`dieta a ser seguida: ${proteina_em_g}g de proteína, ${carboidrato_em_g}g de carboidrato e ${gordura_em_g.toFixed(0)}g de gordura diários a mais.`)

}
else if(ganho_ou_perda === 2){
    const perda = Math.abs((kg_por_semana_em_kcal - necessidade_calorica_semanal) / 7)
    const proteina_em_g = perda * 100
    const carboidrato_em_g = perda * 100
    const gordura_em_g = (perda * 200) / 9
    return console.log(`dieta a ser seguida: ${proteina_em_g}g de proteína, ${carboidrato_em_g}g de carboidrato e ${gordura_em_g.toFixed(0)}g de gordura diários a menos.`)
}
}

main()