import {obter_numero_positivo, obter_texto, mostrar_texto, obter_numero} from './my_io_utils.js'

function main(){
    //Entrada de dados iniciais
    let parada =  1
    let negativo = parada
    let positivo = 2
    let soma_total_das_vendas = 0
    let maior_cashback_entre_todos_os_maiores = -Infinity
    let menor_cashback_entre_todos_os_menores = Infinity
    let cashback_total = 0
    let qtd_total_de_compras = 0

    //While que permite continuar pedindo clientes
    while (parada !== positivo){
        let nome = obter_texto('Digite o nome do cliente:')
        let qtd_de_compras = obter_numero_positivo('Digite a quantidade de compras realizada pelo cliente:')
        let qtd_inicial_de_compras = 0
        let soma_das_vendas = 0
        let cashback = 0
        let maior_cashback = -Infinity
        let menor_cashback = Infinity

    //While que permite realiza os cálculos em cada cliente
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
        
    //Convergência de dados para todos os clientes
    parada = obter_numero_positivo('Digite 1 se tiver mais algum cliente e 2 se não haver mais clientes:')
    qtd_total_de_compras = qtd_total_de_compras + qtd_de_compras
    cashback_total = cashback_total + cashback
    soma_total_das_vendas = soma_total_das_vendas + soma_das_vendas
    maior_cashback_entre_todos_os_maiores = definir_maior_cashback_entre_todos_os_maiores(maior_cashback_entre_todos_os_maiores, maior_cashback)
    menor_cashback_entre_todos_os_menores = definir_menor_cashback_entre_todos_os_menores(menor_cashback_entre_todos_os_menores, menor_cashback)
    }

    const valor_médio_do_cashback_total = cashback_total / qtd_total_de_compras
    const percentual_do_cashback_total = calcular_percentual_do_cashback_total(soma_total_das_vendas, cashback_total)

    mostrar_texto(`=========RELATÓRIO===========
    Soma total das vendas: ${soma_total_das_vendas.toFixed(2)}
    Cashback total:${cashback_total.toFixed(2)}
    Percentual do Cashback total: ${percentual_do_cashback_total.toFixed(2)} %
    Cashback médio: ${valor_médio_do_cashback_total.toFixed(2)}
    Maior Cashback: ${maior_cashback_entre_todos_os_maiores.toFixed(2)}
    Menor Cashback: ${menor_cashback_entre_todos_os_menores.toFixed(2)}`)

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


function definir_maior_cashback_entre_todos_os_maiores(maior_de_todos, maior){
    return maior_de_todos = maior > maior_de_todos ? maior : maior_de_todos
}


function definir_menor_cashback_entre_todos_os_menores(menor_de_todos, menor){
    return menor_de_todos = menor < menor_de_todos ? menor : menor_de_todos
}


function calcular_percentual_do_cashback_total(soma_total, cashback_total){
    return (cashback_total * 100) / (soma_total + cashback_total)
}


main()