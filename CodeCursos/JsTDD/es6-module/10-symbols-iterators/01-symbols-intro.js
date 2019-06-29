// Symbol é imutavel
let foo = Symbol('name')
console.log(foo)

let obj = {
  [Symbol('name')]: 'Igor',
  [Symbol('age')]: 17,
  city: 'Teresópolis'
}

console.log(Object.getOwnPropertySymbols(obj))
