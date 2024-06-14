
const valores = [`pedra`,`papel`,`tesoura`]
let resposta
do{
console.log("vamos joga!escolha suas arma\n[0] pedra\ n[1] papel\ n[2] tesoura")
 
 let jogador = Number=(promot("faça sua escolha"))
 jogador = valores[jogador]

let bot = Math.floor(math.random()*3)

bot = valores[bot]
console.log("você escolheu"+jogador+"\n seu adversário escolheu"+bot)
 
if(jogador===bot){
console.log("empate")

}else if((jogador===`pedra`&&bot===`tesoura`)||(jogador===`papel`&&bot===`pedra`)||(jogador===`tesoura`&&bot===`papel`)) {
console.log("Você venceu!")

}else {
console.log("perdeu :(")
}

resposta = promot("Deseja jogar novamente?[s/n]")

resposta = resposta.toUppeCase()

} while (resposta===`s`)


