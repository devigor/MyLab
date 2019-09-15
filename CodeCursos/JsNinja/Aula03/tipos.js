// tipos primitivos: number, string, boolean, float, null e undefined

// tipos de objetos: todo resto
var pessoa = {
  nome: 'Igor',
  idade: 18,
  altura: 1.70,
  cidade: 'Teresópolis',
  correr: function() {
    return 'está correndo.'
  },
  aniversario: function() {
    pessoa.idade++
  }
}
console.log(pessoa.correr())
console.log(pessoa.aniversario())
console.log(pessoa.idade)

var newPessoa = {
  nome: 'Laryssa',
  idade: 18,
  altura: 1.20,
  cidade: 'Teresópolis',
  andar: function() {
    return 'está andando.'
  },
  aniversario: function() {
    newPessoa.idade++
  }
}
console.log(newPessoa.andar())
console.log(newPessoa.aniversario())
console.log(newPessoa.idade)