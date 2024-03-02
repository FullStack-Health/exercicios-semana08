const listaUl = document.getElementById("lista")
const tituloInput = document.getElementById("titulo")

const buttonAdicionar = document.getElementById("adicionar")
buttonAdicionar.addEventListener("click", function(){
  criarTarefa(tituloInput.value)
})

function criarTarefa(titulo){
  let tarefa = {
    titulo: titulo,
    concluido: false
  }

  let listaTarefas = lerListaTarefas()

  listaTarefas.push(tarefa)

  localStorage.setItem("tasks", JSON.stringify(listaTarefas))

  tituloInput.value = "";
  renderizarLista()
}

function lerListaTarefas(){
  let listaTarefas = localStorage.getItem("tasks")

  // essas !! validam se o valor é diferente de null e undefined
  if(!!listaTarefas){
    return JSON.parse(listaTarefas)
  }

  return []
}

function renderizarLista(){
  let listaTarefas = lerListaTarefas()
  listaUl.innerHTML = "";

  listaTarefas.map((tarefa, index) => {

    let id = 'tarefa-' + index
    let idButton = 'remover-tarefa-' + index

    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.id = id

    let li = document.createElement("li")
    li.appendChild(checkbox)
    li.innerHTML += `<button id='${idButton}'>remover</button> `
    li.innerHTML += tarefa.titulo

    listaUl.appendChild(li)

    let idCheckbox = document.getElementById(id)
    idCheckbox.checked = tarefa.concluido
    idCheckbox.addEventListener("change", function(){
      marcarTarefaConcluida(tarefa.titulo)
    })

    let buttonRemover = document.getElementById(idButton)
    buttonRemover.addEventListener("click", function(){
      removerTarefa(tarefa.titulo)
    })
  })
}

function marcarTarefaConcluida(titulo){
  let listaTarefas = lerListaTarefas()

  listaTarefas.map(tarefa => {
    if(tarefa.titulo == titulo){
      tarefa.concluido = !tarefa.concluido
    }
  })

  localStorage.setItem("tasks", JSON.stringify(listaTarefas))
}

function removerTarefa(titulo){
  let listaTarefas = lerListaTarefas()

  listaTarefas = listaTarefas.filter(tarefa => {
    if(tarefa.titulo != titulo){
      return true
    }
  })

  localStorage.setItem("tasks", JSON.stringify(listaTarefas))
  renderizarLista()
}

renderizarLista()