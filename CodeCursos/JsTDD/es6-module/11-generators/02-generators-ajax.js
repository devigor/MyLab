function ajax(url) {
  fetch(url)
    .then(data => data.json())
    .then(data => dados.next(data))
}

function* ajaxGen() {
  console.log('Buscando posts...')
  const posts = yield ajax('https://willianjusten.com.br/search.json')
  console.log(posts)

  console.log('Buscando dados github...')
  const github = yield ajax('https://api.users.com/users/devigor')
  console.log(github)
}

const dados = ajaxGen()
dados.next()
