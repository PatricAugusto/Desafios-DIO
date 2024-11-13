// Invocando função dentro de outra função

function calcular(){
    return 5 + 5
}

function retornoSoma(){
    console.log(calcular())
}

retornoSoma()