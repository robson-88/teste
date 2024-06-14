// faça uma contagem regressiva de 10 até 0.
//para cada segundo que for par, mostre a palavra "tic"
//para cada segundo impar, mostra a palavra "tac"
//quando o segundo for 0, mostra a palavra "booooom"

//let valor = 10
// enquanto segundos for maior ou igual a zero, ele executa a contagem

//while (valor >= 0) {
    if(valor === 0) {
        console.log("booom")
    }else if (valor % 2 === 0){
        console.log("tic")
  }else {
    console.log("tac")
  }
  valor--


for(valor = 10; valor >= 0; valor--) {
  if(valor === 0){
    console.log(`booom`)
  } else if (valor % 2 === 0){
    console.log(`tic`)
  } else {
    console.log(`tac`)
  }

}


const arrayDeNumeros = [10,20,30,40,50]

/* for (let i = 0; i < numeros.length; i++){
        console.log(numeros{i})
}
*/
  //para cada número do meu array de números, imprima o valordo número

  for(numero of arrayDeNumeros){
      console.log(numero)
  }