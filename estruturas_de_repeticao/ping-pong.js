import { question } from "readline-sync";

function main(){
    let pts_1 = 0
    let pts_2 = 0
    //Partida em andamento
    while(pode_continuar(pts_1, pts_2)){
        let jogador = Number(question('Ponto:'))
        if(jogador === 1){
            pts_1++
        }
        else if(jogador === 2){
            pts_2++
        }
    }
    //Resultado
    let vencedor = 'Vencedor: Jogador'
    if(pts_1 > pts_2){
        vencedor = vencedor + ' 01'
    }
    else if(pts_2 > pts_1){
        vencedor = vencedor + ' 02'
    }
    console.log(vencedor)
}

function pode_continuar(pts_1, pts_2){
    const diff = Math.abs(pts_1 - pts_2)
    const alvo = 21
    if(pts_1 < alvo && pts_2 < alvo){
        return true
    }
    else if(diff < 2){
        return true
    }
    else{
        return false
    }
}

main()