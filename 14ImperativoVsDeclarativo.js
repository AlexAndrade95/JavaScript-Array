const alunos = [
    { nome: 'Joao', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

//Imperativo (mais didatico, para ensinar para alguem)
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)
//8.55

//Declarativo (mais interessante, mais reuso de codigo)
const getNota = aluno => aluno.nota //funcao que pode ser usada outras vezes
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
//8.55