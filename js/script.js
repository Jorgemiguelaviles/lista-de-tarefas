const botao=document.querySelector("#button")


const teste = (evento)=>{
evento.preventDefault()
  
  const texto=document.querySelector("#texto")
  const lista=document.querySelector("#lista")
  const valor=texto.value
  const modelo = `<p>${valor}</p>`
  const atributo=document.createElement("ul")
  atributo.innerHTML=modelo
  lista.appendChild(atributo)
  atributo.classList.add("conteudoPrincipal__lista")
}
                              


botao.addEventListener('click',teste)