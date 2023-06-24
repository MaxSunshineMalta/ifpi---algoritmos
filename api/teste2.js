import {obter_numero_positivo, obter_texto, mostrar_texto, obter_numero} from './my_io_utils.js'

function main(){
    let parada = obter_numero_positivo('Digite 1 se tiver mais algum cliente e qualquer outro número se não haver mais clientes:') 

    while (parada === 1){

        const loja = vai_loja()
        
        parada = obter_numero_positivo('Digite 1 se tiver mais algum cliente e qualquer outro número se não haver mais clientes:')
    }
}


function vai_loja(){
    let nome = obter_texto('Digite o nome do cliente:')
    let qtd_de_compras = obter_numero_positivo('Digite a quantidade de compras realizada pelo cliente:')
    let qtd_inicial_de_compras = 0
    let soma_das_vendas = 0
    let cashback = 0
    let maior_cashback = -Infinity
    let menor_cashback = Infinity

    while (qtd_inicial_de_compras < qtd_de_compras){
        let  valor_da_compra = obter_numero_positivo('Digite o valor da compra:')
        let candidato_a_valor_do_cashback = calcular_cashback(valor_da_compra)
        let candidato_a_valor_da_soma_das_vendas = calcular_soma_das_vendas(valor_da_compra, candidato_a_valor_do_cashback)
        
        maior_cashback = definir_maior_cashback(candidato_a_valor_do_cashback, maior_cashback)
        menor_cashback = definir_menor_cashback(candidato_a_valor_do_cashback, menor_cashback )
        cashback = candidato_a_valor_do_cashback + cashback
        soma_das_vendas = candidato_a_valor_da_soma_das_vendas + soma_das_vendas
        qtd_inicial_de_compras++ 
        
    }

    const valor_médio_do_cashback = cashback / qtd_de_compras
    const percentual_do_cashback = calcular_percentual_do_cashback(soma_das_vendas, cashback)

    mostrar_texto(`=========RELATÓRIO===========
    Soma das vendas: ${soma_das_vendas.toFixed(2)}
    Cashback:${cashback.toFixed(2)}
    Percentual do Cashback: ${percentual_do_cashback.toFixed(2)} %
    Cashback médio: ${valor_médio_do_cashback.toFixed(2)}
    Maior Cashback: ${maior_cashback.toFixed(2)}
    Menor Cashback: ${menor_cashback.toFixed(2)}`)
}


function calcular_cashback(valor){
    if(valor <= 250){
        const cashback = 0.05 * valor
        return cashback
    }else if(valor <= 500){
        const cashback = 0.07 * valor
        return cashback
    }else if(valor <= 750){
        const cashback = 0.08 * valor
        return cashback
    }else{
        const cashback = 250 * 0.05 + 500 * 0.07 + 750 * 0.08 + (valor - 750) * 0.25
        return cashback
    }
}


function calcular_soma_das_vendas(valor, cashback){
    return valor - cashback
}


function definir_maior_cashback(candidato, maior){
    return maior = candidato > maior ? candidato : maior
}


function definir_menor_cashback(candidato, menor){
    return menor = candidato < menor ? candidato : menor
}


function calcular_percentual_do_cashback(soma, cashback){
    return (cashback * 100) / (soma + cashback)
}


main()