function minhaLoja(loja) {
    const nomeDaLoja = document.querySelector("#nomeDaLoja")
    nomeDaLoja.textContent = loja.nome

    const descricaoDaLoja = document.querySelector(".descricaoDaLoja")
    descricaoDaLoja.textContent = loja.descricao

    const title = document.querySelector(".title")
    title.textContent = loja.banner.title

    const conteudo = document.querySelector(".conteudo")
    conteudo.textContent = loja.banner.content

    const banner = document.querySelector(".banner")
    banner.style.backgroundImage = `url("${loja.banner.image}")`

    loja.produtos.forEach(item => {
        produtosLoja(item)
    })
}

function produtosLoja(produtos) {
    const listaProdutos = document.querySelector(".listaProdutos")   
    
    const div = document.createElement("div")
    div.classList.add("div1")
    
    const a = document.createElement("a")
    a.href = `produtos/${produtos.id}`

    const img = document.createElement("img")
    img.classList.add("img-produto")
    img.src = `${produtos.img.path}.${produtos.img.extension}`

    const h1 = document.createElement("h1")
    h1.textContent = produtos.nome

    const paragrafo = document.createElement("p")
    paragrafo.textContent = `R$ ${produtos.valor},00`

    div.append(img)
    div.append(h1)
    div.append(paragrafo)
    a.append(img)
    a.append(h1)
    a.append(paragrafo)
    div.append(a)
    
    listaProdutos.append(div) 
}

minhaLoja(Loja)