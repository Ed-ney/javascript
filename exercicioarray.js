let jogadores = ['Leonardo ', 'Milena ', 'Bryan '] //Array - bariável composta

console.log('Lobby: ' + jogadores)

jogadores[2] = 'Shay '

console.log(jogadores)

jogadores.push('Bryan ', 'Luan ', 'Edney ', 'Gabriel ', 'Luana ', 'Rafael ')

console.log(jogadores)

console.log('Quantos vão jogar: ' + jogadores.length)

console.log('Lista em ordem alfabética: ' + jogadores.sort())

for (let posicao = 0; posicao < jogadores.length; posicao++) {
    console.log('Jogador: ' + posicao + ' ' + jogadores[posicao])
}