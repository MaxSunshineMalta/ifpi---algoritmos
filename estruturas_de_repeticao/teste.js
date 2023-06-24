import { question } from "readline-sync";

function main(){
    const inicio_do_intervalo = Number(question('Início do intervalo:'))
    const multiplo = Number(question('Múltiplo:'))
    const final_do_intervalo = Number(question('Final do intervalo:'))
    const impares_multiplos_de_7_no_intervalo = mostrar_qtd_de_impares_multiplos_de_7_no_intervalo(inicio_do_intervalo, final_do_intervalo, multiplo)
}

function mostrar_qtd_de_impares_multiplos_de_7_no_intervalo(inicio, fim, multiplo){
    let atual = calcular_primeiro_inicio_multiplo_de_7(inicio, multiplo)
    const alvo = fim
    const passo = 14
    if(atual % 2 === 1){
        while (atual <= alvo){
            console.log(`${atual}`)
            atual = atual + passo
        }
    }
    else{
        let novo_atual = atual + 7
        while (novo_atual <= alvo){
            console.log(` ${novo_atual}`)
            novo_atual = novo_atual + passo
        }
    }

}
function calcular_primeiro_inicio_multiplo_de_7(inicio, multiplo){
    if(inicio === 7 * (multiplo - 1) + 1){
        const mult1 = inicio + 6
        return mult1
    }
    else if(inicio === 7 * (multiplo - 1) + 2){
        const mult2 = inicio + 5
        return mult2
    }else if(inicio === 7 * (multiplo - 1) + 3){
        const mult3 = inicio + 4
        return mult3
    }
    else if(inicio === 7 * (multiplo - 1) + 4){
        const mult4 = inicio + 3
        return mult4
    }
    else if(inicio === 7 * (multiplo - 1) + 5){
        const mult5 = inicio + 2
        return mult5
    }
    else if(inicio === 7 * (multiplo - 1) + 6){
        const mult6 = inicio + 1
        return mult6
    }
}

main()