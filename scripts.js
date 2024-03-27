const lista = document.querySelector('ul')
const produtos = { name: 'X-Bacon Egg', price: 39, vegan: false, src: './assets/bacon-egg.png' }

const buttonMostrarTudo = document.querySelector('.mostrarLista')

const mapList = document.querySelector('.mapearLista')

const somarLista = document.querySelector('.somarLista')

const filtrarLista = document.querySelector('.filtrarLista')

//metodo formatação de moeda

function formatarMoeda(valor) {
    const novoValor = valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    return novoValor

}

//metodo forEach

function mostrarTudo(produtosArray) {

    let minhaLista = ''


    produtosArray.forEach(produtos => {
        minhaLista +=
            `
        <li>
        <img src=${produtos.src} alt="imagem de um lanche x-egg">
        <p>${produtos.name}</p>
        <p class="item-price">${formatarMoeda(produtos.price)}</p>
        </img>
        </li>
        
        `
    });

    lista.innerHTML = minhaLista

    console.log(minhaLista)


}


//metodo map
function mapearTodosItens() {
    const novopreco = menuOptions.map((product) => ({
        ...product, // Spread operation
        price: product.price * 0.9, //opção 10% desconto

    }))

    mostrarTudo(novopreco)
}



//metedo reduce
function somarTodosItens() {
    const totalValue = menuOptions.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0)
    lista.innerHTML =
        `
        <ul style='display: flex;'>
        </ul>
        
            <li>
        
                <p style='color:orange;'>O valor total dos Itens é de ${formatarMoeda(totalValue)}</p>
            </li>
    `

}

//metodo filtar
function filtrarItensDaLista() {
    const filtrarLista = menuOptions.filter((produto) => produto.vegan)
    mostrarTudo(filtrarLista)



}

//FUNÇÕES EXECUTADAS
buttonMostrarTudo.addEventListener('click', () => mostrarTudo(menuOptions))
mapList.addEventListener('click', mapearTodosItens)
somarLista.addEventListener('click', somarTodosItens)
filtrarLista.addEventListener('click', filtrarItensDaLista)
