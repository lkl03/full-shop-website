window.addEventListener('load', cartProductsNumber)
function cartProductsNumber(){
    let windowCartProducts = JSON.parse(window.localStorage.getItem("newProduct"));
    let productsInCart = document.getElementById('cartProducts')
    let productsAdded = 0
    for(let i = 0; i < windowCartProducts.length; i++){
        productsAdded = windowCartProducts.length
    }
    productsInCart.innerHTML = productsAdded + `<i class="fas fa-shopping-cart"></i>`
}