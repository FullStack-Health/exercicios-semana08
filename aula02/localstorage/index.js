const nomeAluno = document.getElementById("nomeAluno")

const botaoAdicionar = document.getElementById("botaoAdicionar")
botaoAdicionar.addEventListener("click", function (){

  adicionarNaLista(nomeAluno.value)
  nomeAluno.value = ""
})

// botaoAdicionar.addEventListener("click", letInputNome)

// function letInputNome(){
//   adicionarNaLista(nomeAluno.value)
//   nomeAluno.value = ""
// }

function adicionarNaLista(nome){
  let aluno = {
    nome: nome,
    turma: "health",
    curso: "fullstack"
  }

  const listaAlunos = lerListaAlunos()

  listaAlunos.push(aluno)

  localStorage.setItem("listaAlunos", JSON.stringify(listaAlunos))
  renderizarListaAlunos()
}

function removerAluno(nome){
  let listaAlunos = lerListaAlunos()

  listaAlunos = listaAlunos.filter(aluno => {
    if(aluno.nome != nome){
      return true
    }
  })

  localStorage.setItem("listaAlunos", JSON.stringify(listaAlunos))
}

function lerListaAlunos(){
  const listaAlunos = localStorage.getItem("listaAlunos")

  if(!!listaAlunos){
    return JSON.parse(listaAlunos)
  }

  return []
}

function renderizarListaAlunos(){
  const listaAlunos = lerListaAlunos()
  const tagLista = document.getElementById("listaAlunos")
  tagLista.innerHTML = ""

  listaAlunos.map(aluno => {
    // let li = document.createElement("li")
    // li.innerText = aluno.nome
    // template literals
    let li = `<li>${aluno.nome}</li>`
    // let li = '<li>' + aluno.nome + '</li>'

    tagLista.innerHTML += li
  })
}

renderizarListaAlunos()