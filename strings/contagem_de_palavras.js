import { mostrar_texto, obter_texto, calcular_qtd_de_palavras } from './my_io_utils.js'

function main(){
    const frase = obter_texto('Digite uma frase:')

    const qtd_de_palavras = calcular_qtd_de_palavras(frase)

    mostrar_texto(`Quantidade de palavras: ${qtd_de_palavras}`)
}

main()