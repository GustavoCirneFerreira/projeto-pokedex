const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    
    const modoClaroEstaAtivo = body.classList.contains("modo-claro");
    body.classList.toggle("modo-claro")
    
    if(modoClaroEstaAtivo) {
        body.classList.remove("modo-claro")
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    } else {
    
        body.classList.add("modo-claro")
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")


}
})


