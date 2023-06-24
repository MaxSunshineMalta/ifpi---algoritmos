import {readFileSync} from 'fs'
var lines = readFileSync('./input.txt', 'utf8').split('\r\n');
let index = 0 

function main(){
    const [x0, y0, x1, y1] = lines[index++].split(' ').map(Number)
    const [x2, y2, x3, y3] = lines[index++].split(' ').map(Number)

    const situacao 
}