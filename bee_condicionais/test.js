import {readFileSync} from 'fs'
var lines = readFileSync('./input.txt', 'utf8').split('\r\n')
let index = 0

function main(){
    const [a, b, c] = lines[index++].split(' ').map(Number)

}

main()