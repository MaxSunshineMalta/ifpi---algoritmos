import { mostrar_texto, obter_numero_positivo } from './my_io_utils.js'

function main(){
    const limite = obter_numero_positivo(`Digite o limite:`)
    let quadrado = 1

    const maior_quadrado_menor_ou_igual = calcular_maior_quadrado_menor_igual(limite, quadrado)

    mostrar_texto(maior_quadrado_menor_ou_igual)
}


function calcular_maior_quadrado_menor_igual(limite, quadrado){
    for(let i = 0; i < limite; i = quadrado * quadrado){
        quadrado++
    }

    if(quadrado * quadrado === limite){
        return quadrado * quadrado
    }else{
        const maior_quadrado_menor_ou_igual = Math.pow((quadrado - 1), 2)

        return maior_quadrado_menor_ou_igual
    }
}

main()