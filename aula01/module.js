import dados from "./receitas.json" assert { type: "json" };

const divPrincipal = document.getElementById("principal");
let atual = 0;

const botaoAnterior = document.getElementById("botao-anterior");
const botaoProximo = document.getElementById("botao-proximo");
botaoProximo.addEventListener("click", function () {

  // 5       igual       6 - 1 = 5
  if(atual == dados.receitas.length - 1){
    return
  }

  atual = atual + 1;
  renderizarReceita()
});

function renderizarReceita() {
  const receita = dados.receitas[atual];
  divPrincipal.innerHTML = ""

  const h2 = document.createElement("h2");
  h2.innerText = receita.nome;

  const tituloIngredientes = document.createElement("p");
  tituloIngredientes.innerText = "Ingredientes";

  const listaIngredientes = document.createElement("ul");
  receita.ingredientes.map((item) => {
    let li = document.createElement("li");
    li.innerText = item;

    listaIngredientes.appendChild(li);
  });

  divPrincipal.appendChild(h2);
  divPrincipal.appendChild(tituloIngredientes);
  divPrincipal.appendChild(listaIngredientes);
}

renderizarReceita()
