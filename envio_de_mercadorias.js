import { print, input } from '../io_utils.js'

function main(){

    const Dia = Number(input("Digite a quantidade de dias alternados(ex. 2, 3, 5 ou 15): "))
    const diaMes = Number(input("Digite a quantidade de dias no mês(ex. 28,29,30 ou 31): "))

    
    const total = (diaMes / Dia) * 30

    console.log(total)
}
main()
