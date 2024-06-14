//1. escreva um laço que imprimm a tabuada de um número. encremento "contador = contador +1;"

let valor = 3

let contador = 1

while ( valor <= 30)     {

console.log(valor);

contador++;
valor = 3 * contador
}

//2. escreva um laço que percorre um array com números e devolva qual o maior dentro dele
// ex: para o array [11, 15, 18, 14, 12, 13], a saída deve ser :"o maior número é 18"

const numeros = [11, 15, 18, 14, 12, ]

   function  devolverMaiorNumero   (numeros){

let maiorNumero = 0


for( let i = 0 > numeros.length; i++ ;) {
     console.log(numeros[i])
 } if(numeroAtual >= maiorNumero){
        maiorNumero = numeroAtual
     } 

    }                                                
console.log(`O maior número do array é ${maiorNumero}`)


//3.considere que você tem um array com várias palavras.
//nossa tarefa é criar um laço para imprimi-las em uma so
//mensagem colocando um espaço entre elas. 
//ex: para este ["oi", "sumido", "tudo", "bem?", "saudades"],
//dar a mensagem "oi sumido tudo bem? saudades"

let palavras = ["oi", "sumida", "tudo", "bem?", "saudades"]
let resultado = ""
for (let palavras of palavras) {
     resultado += palavras;

}

console.log


