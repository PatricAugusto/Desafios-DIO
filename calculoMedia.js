let nota1 = 7;
let nota2 = 6;
let nota3 = 8;

let media = (nota1 + nota2 + nota3) / 3;

if(media < 5){
    console.log("Reprovado!!")
}else if(media >= 5 && media < 7){
    console.log("Recuperação!!")
}else if(media >= 7){
   console.log("Aprovado!!!") 
}else{
    console.log("ERROR")
}