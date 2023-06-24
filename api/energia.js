import { mostrar_texto, obter_numero_positivo } from './my_io_utils.js'

function main(){
    const current_reading = obter_numero_positivo('Digite a Leitura Atual(KWh):')
    const previous_reading = obter_numero_positivo('Digite a leitura Anterior(KWh):')

    const power_consumption = current_reading - previous_reading
    const value_before_tax = calculate_value_before_tax(power_consumption)
    const flag_value = calculate_flag_value(power_consumption)
    const icms = calculate_icms(value_before_tax)
    const pis_confis = calculate_pis_confis(value_before_tax)
    const lighting_rate = calculate_lighting_rate(power_consumption, value_before_tax)
    const invoiced_amount = value_before_tax + flag_value + icms + pis_confis + lighting_rate

    mostrar_texto(`===========TALÃO DE ENERGIA=========
    Consumo(KWh): ${power_consumption.toFixed(2)}KW/h
    Valor Faturado: R$${invoiced_amount.toFixed(2)}
    Bandeira: R$${flag_value.toFixed(2)}
    ICMS: R$${icms.toFixed(2)}
    PIS/CONFIS: R$${pis_confis.toFixed(2)}
    Taxa de Iluminação: R$${lighting_rate.toFixed(2)}`)

}


function calculate_value_before_tax(consumption){
    if(consumption <= 30){
        return 0
    }else if(consumption <= 100){
        return 0.59 * consumption
    }else{
        return 0.75 * consumption
    }
}


function calculate_flag_value(consumption){
    if(consumption >= 100){
        const value_to_be_multiplied = Math.floor(consumption / 100)
        const flag_value = value_to_be_multiplied * 8
        return flag_value
    }
}


function calculate_icms(value_before_tax){
    return 0.25 * value_before_tax
}


function calculate_pis_confis(value_before_tax){
    return 0.15 * value_before_tax
}


function calculate_lighting_rate(consumption, value_before_tax){
    if(consumption > 80){
        return  0.06 * value_before_tax
    }
}

main()