function* genNames() {
  yield 'Igor'
  yield 'Laryssa'
  yield 'Ítalo'
}

const names = genNames()
console.log(names.next())
console.log(names.next())
console.log(names.next())
