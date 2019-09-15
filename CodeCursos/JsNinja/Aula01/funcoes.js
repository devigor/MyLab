var x = 1 
function soma() {
  return x += 1
}

console.log(soma())

// Escopo
function nome() {
  var meuNome = 'Igor'
  return meuNome
}
console.log(nome())

// Parametros
function sum(x, y) {
  return x + y
}
console.log(sum(2,2))