let alunos = ['Maria', 'Sharlayne', 'Gabriel', 'Rafael']
console.log('Todos: ' + alunos)
console.log('Aluno: ' + alunos[1]) //acessando pela posição
alunos[1] = 'Leandro' //substituiu o Rafael pelo Leandro
console.log(alunos)
alunos.push('Milena') //adicionou um novo valor, na última posição
console.log(alunos)
console.log('Total ' + alunos.length) //mostra o tamanho do array
console.log(alunos)

console.log('Ordenando os dados do meu array' + alunos.sort())

for (let posicao = 0; posicao < alunos.length; posicao++) {
    console.log('Aluno: ' + posicao + ' ' + alunos[posicao])
}