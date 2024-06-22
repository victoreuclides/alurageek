document.addEventListener('DOMContentLoaded', () => {

    const btGuardar = document.getElementById('guardar')
    const btLimpar = document.getElementById('limpar')
    const pdLista = document.getElementsByClassName('produtos-lista')[0]

    btGuardar.addEventListener('click', (event) => {
        event.preventDefault()

        var pdImagem = document.getElementById('image').value
        var pdTitulo = document.getElementById('name').value
        var pdPreco = document.getElementById('preco').value

        const novoProduto = document.createElement('div')
        novoProduto.classList.add('produto')
        novoProduto.innerHTML = 
            `
            <img src="${pdImagem}" alt="${pdTitulo}">
            <h3>${pdTitulo}</h3>
            <p>$ ${pdPreco}</p>
            `

        pdLista.appendChild(novoProduto)
    })

    btLimpar.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o formulário de ser limpo automaticamente

        document.getElementById('image').value = '';
        document.getElementById('name').value = '';
        document.getElementById('preco').value = '';
    });
})