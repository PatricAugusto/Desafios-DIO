// Desafio media de notas DIO

let nota1 = 7;
let nota2 = 6;
let nota3 = 10;

let notaMedia = (nota1 + nota2 + nota3) / 3

console.log(notaMedia.toFixed(2))

if(notaMedia < 5){
    console.log("Reprovado!")
}else if(notaMedia >= 5 && notaMedia <= 7){
    console.log("Recuperação!")
}else if(notaMedia > 7){
    console.log("Passou de semestre")
}else{
    console.log("ERROR!!")
}