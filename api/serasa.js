import { mostrar_texto, obter_numero_positivo } from './my_io_utils.js'

function main(){
    const question_a = obter_numero_positivo('A) Referente a: Dados positivos (cartão de crédito, consórcio, consignado, empréstimos e financiamentos) comportamentos de pagamento, tempo dos contratos e tipos de contratos, atribua um valor de 0 a 100:')
    const question_b = obter_numero_positivo('B) Referente a: Informações de dívidas, histórico de regularização e em aberto, atribua um valor de 0 a 100:')
    const question_c = obter_numero_positivo('C) Referente a: Consultas para novos contratos de serviço ou crédito, atribua um valor de 0 a 100:')

    const points_of_question_a_in_the_old_score = calculate_points_of_question_a_in_the_old_score(question_a)
    const points_of_question_b_in_the_old_score = calculate_points_of_question_b_in_the_old_score(question_b)
    const points_of_question_c_in_the_old_score = calculate_points_of_question_c_in_the_old_score(question_c)
    const points_of_question_a_in_the_new_score = calculate_points_of_question_a_in_the_new_score(question_a)
    const points_of_question_b_in_the_new_score = calculate_points_of_question_b_in_the_new_score(question_b)
    const points_of_question_c_in_the_new_score = calculate_points_of_question_c_in_the_new_score(question_c)
    const all_points_in_the_old_score = calculate_all_points_in_the_old_score(points_of_question_a_in_the_old_score, points_of_question_b_in_the_old_score, points_of_question_c_in_the_old_score)
    const all_points_in_the_new_score = calculate_all_points_in_the_new_score(points_of_question_a_in_the_new_score, points_of_question_b_in_the_new_score, points_of_question_c_in_the_new_score)
    const rating_based_on_old_score = report_rating_based_on_old_score(all_points_in_the_old_score)
    const rating_based_on_new_score = report_rating_based_on_new_score(all_points_in_the_new_score)

    mostrar_texto(`================Relatório=============
    Para o score 1.0, o valor obtido foi ${all_points_in_the_old_score.toFixed(2)}, classificando-se como ${rating_based_on_old_score}!!
    Enquanto para o score 2.0, o valor obtido foi ${all_points_in_the_new_score.toFixed(2)}, classificando-se como ${rating_based_on_new_score}!!`)
}


function calculate_points_of_question_a_in_the_old_score(a){
    return (a * 260) / 100
}


function calculate_points_of_question_b_in_the_old_score(b){
    return (b * 570) / 100
}


function calculate_points_of_question_c_in_the_old_score(c){
    return (c * 170) / 100
}


function calculate_points_of_question_a_in_the_new_score(a){
    return (a * 620) / 100
}


function calculate_points_of_question_b_in_the_new_score(b){
    return (b * 190) / 100
}


function calculate_points_of_question_c_in_the_new_score(c){
    return (c * 190) / 100
}


function calculate_all_points_in_the_old_score(old_points_a, old_points_b, old_points_c){
    return old_points_a + old_points_b + old_points_c
}


function calculate_all_points_in_the_new_score(new_points_a, new_points_b, new_points_c){
    return new_points_a + new_points_b + new_points_c
}

function report_rating_based_on_old_score(old_score){
    if(old_score <= 400){
        return 'Baixo'
    }else if(old_score <= 600){
        return 'Regular'
    }else if(old_score <= 800){
        return 'Bom'
    }else{
        return 'Muito bom'
    }
}


function report_rating_based_on_new_score(score){
    if(score <= 300){
        return 'Baixo'
    }else if(score <= 500){
        return 'Regular'
    }else if(score <= 700){
        return 'Bom'
    }else{
        return 'Muito bom'
    }
}

main()