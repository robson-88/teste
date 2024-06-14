//1.crie um laço de repetição que escreva os números de 1 a 100.

for(let i = 1; i <= 100; i++  ){
    console.log(`1 Ex.`,i)

}
  console.log()
//2.crie um laço que imprima os números pares de 1 a 200.

for (let i = 0; i <= 200; i++ ) {
     
 if(i % 2 === 0){
   console.log(`2 Ex.`, i)
}
}
console.log()


//3.crie um laço que imprima a tabuada do número 5.
let n = 5

for(let i = 1; i <= 10; i++){
    console.log(`3 Ex. ${i} x ${n}  = ${i * n}`);
}

console.log()

//4.faça um array com 6 números e apartir dele crie um laço que imprima cada número do array.

const array = [9,4,10,13,8,12]

for (let i = 0; i < array.length; i++){
    console.log(`4 Ex.`,array[i])
}

/* for (let numero of numeros){
 console.log(numero)
} */
