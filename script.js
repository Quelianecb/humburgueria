/**Criando o script mostrar as imagens*/

const list = document.querySelector('ul')/**mostra as imagnes  */
const buttonShowAll = document.querySelector('.show-all')/**esconder as imagnes */
const buttonMapAll = document.querySelector('.map-all')/**botao de mapear */
const sumAll = document.querySelector('.sum-all')/*soma de todos os produtos*/
const filterAll =document.querySelector('.filter-all')/**filtrar os produtos  */




/*aqui vai mostrar os produtos na tela com descontos*/
function showAll(produtosArrays) {

    let myLi = ''/**aqui vai zera quando clicar no foreach */


    produtosArrays.forEach((produtos) => {
        myLi += `<li>
    <img src=${produtos.src}>
            <p>${produtos.name}</p>
                <p class="item-price">R$ ${(produtos.price)}</p>
        </li>`
    })

    list.innerHTML = myLi
}
/*
console.log(myLi)*/
/**aqui vai ser o botao de mapear da os descontos */
function mapAll() {
    /*console.log('aqui')*/
    const newPrices = menuOptions.map((produtos) => ({
        /* name:produtos.name,
         price:produtos.price*0.9,/**da o desconto 
         vegan:produtos.vegan,
         src:produtos.src*/
        /*mais para aprender de forma dinamica vamos fazer assim*/
        ...produtos,
        price: produtos.price * 0.9,/**da o desconto */
    }))
    console.log(newPrices)
    showAll(newPrices)

}
/**somar dos produtos */
function sumAllItems() {
    const totalValor = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
       list.innerHTML= /*vai mosrtra n atela */
       `<li> 
       <p> O valor os produtos selecionados é R$ ${totalValor}</p>
       </li>
    `
}
/**aqui vai buscar os veganos */

function filterAllItens(){
    const filteVegan=menuOptions.filter( (produtos) =>produtos.vegan === true)
    showAll(filteVegan)

}

/**aqui em baixo sao os botao clicados  */
buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAll)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItens)


