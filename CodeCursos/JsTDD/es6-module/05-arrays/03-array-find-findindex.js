const date = [
  {
    name: 'Igor',
    age: 17,
    city: 'São Paulo'
  },
  {
    name: 'Laryssa',
    age: 17,
    city: 'Teresópolis'
  }
]

const sampleArray = [4, -5, 0, -10]

const underZero = sampleArray.find(x => x < 0) // retorna o primeiro elemento menor que 0
console.log(underZero)
const underZeroFilter = sampleArray.filter(x => x < 0) // retorna todos os elementos menos que 0 em um novo array
console.log(underZeroFilter)

const underZeroIndex = sampleArray.findIndex(x => x < 0)
console.log(underZeroIndex) // retorna o indice onde foi achado o valor

const findIgor = date.find(person => person.name === 'Igor') // retorna o objeto onde se encontra o nome Igor
console.log(findIgor)
