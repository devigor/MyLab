// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(n1, n2) {
  return n1 + n2
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultado = soma(10, 10)
resultado += 5

// Qual o valor atualizado dessa variável
console.log(resultado) // 25

// Declare uma nova variável, sem valor.
var newvar

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function add() {
  newvar = 'VALOR'
  return newvar
}

// Invoque a função criada acima.
console.log(add())

// Qual o retorno da função (Use comentários de bloco).
/* VALOR */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function myfun(arg1, arg2, arg3) {
  if(arg1 == undefined || arg2 == undefined || arg3 == undefined) {
    return 'Preencha todos os valores corretamente!'
  } else {
    return (arg1 * arg2 * arg3) + 2
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log(myfun(1, 2))

// Qual o resultado da invocação acima (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(myfun(2, 2, 2))

// Qual o resultado da invocação acima (Use comentários para mostrar o valor retornado).
// 8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
var soma
function otherfun(a, b, c) {
  if(a != undefined && b === undefined && c === undefined) {
    return a
  } else if(a != undefined && b != undefined && c === undefined) {
    soma = a + b
    return soma

  } else if(a != undefined && b != undefined && c != undefined) {
    return soma / c
  } else if(a === undefined && b === undefined && c === undefined) {
    return false
  } else {
    return null
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(otherfun()) // false
console.log(otherfun(1)) // 1
console.log(otherfun(1, 2)) // 3
console.log(otherfun(1, 3, 3)) // 1