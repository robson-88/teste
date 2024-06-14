//crie uma contagem regressiva usando for. Adiferença é que
//o número vai ser fornecido pelo usuário através do comando readline.
  
const readlineSync = require(`readline-sync`);

//const i = readlineSync.question(`insira um numero:`)

for( let i = readlineSync.question (`insira um numero:`); i >= 0; i-- ){
console.log(i)
}









