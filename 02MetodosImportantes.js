const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //massa quebrou o carro!,remove o ultimo elemento
console.log(pilotos)
//[ 'Vettel', 'Alonso', 'Raikkonen' ]

pilotos.push('Verstappen')//adiciona o ultimo elemento
console.log(pilotos)
//[ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.shift() // remove o primeiro!
console.log(pilotos)
//[ 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.unshift('Hamilton') //adiciona o primeiro
console.log(pilotos)
//[ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

// splice pode adicionar e remover elementos
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
//[ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]
// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)
//[ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)
//[ 'Bottas', 'Raikkonen', 'Verstappen' ]
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)///
//[ 'Alonso', 'Bottas', 'Raikkonen' ]