const usuario = {
  nome: 'Bruno',
  email: "email@email.com",
  senha: "1234"
}

const usuariosList = `
  [
    {
      "nome": "Bruno",
      "email": "email@email.com",
      "senha": "1234"
    }
  ]
`
console.log(usuariosList)
console.log(JSON.parse(usuariosList))
console.log(JSON.stringify(usuario))

