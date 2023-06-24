import {readFileSync} from 'fs'
var lines = readFileSync('./input.txt', 'utf8').split('\r\n');
let index = 0 

function main(){
    const [a, g, ra, rg] = lines[index++].split(' ').map(Number)
    
    const tipo_mais_vantajoso = determinar_tipo_de_combustivel_mais_vantajoso(a, g, ra, rg)
    
    console.log(tipo_mais_vantajoso)
}


function determinar_tipo_de_combustivel_mais_vantajoso(a, g, ra, rg){
    const km_da_gasolina_com_valor_do_litro_de_alcool = (rg * a) / g
    if(a === g && ra <= rg){
        return 'G'
    }else if(a === g && ra > rg){
        return 'A'
    }
    else if(km_da_gasolina_com_valor_do_litro_de_alcool >= ra){
        return 'G'
    }else if(km_da_gasolina_com_valor_do_litro_de_alcool < ra){
        return 'A'
    }
}

main()