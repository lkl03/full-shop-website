window.addEventListener('load', (event) => {
    ready()
    total()
    cartProductsNumber()
});

let cartProducts = JSON.parse(localStorage.getItem("newProduct"));
if (localStorage.getItem("newProduct") == null || cartProducts.length === 0){
    document.getElementsByClassName('products_container_first-row')[0].innerHTML = "<p>Hey! This seems to be empty... <a href='../shop.html'>Why don't you add some items?</a></p>"
}

let purchaseButton = document.getElementsByClassName('products_container-payment-button')
purchaseButton[0].addEventListener('click', function(){
    if(!alert("Thanks for your purchase! :)")){
        window.localStorage.clear()
        window.location.reload()
    }    
})

for(let i = 0; i < cartProducts.length; i++){
    const id = cartProducts[i].id
    let newCartProduct = document.createElement('div')
    newCartProduct.setAttribute('id', id)
    newCartProduct.classList.add('product')
    newCartProduct.classList.add('cart')
    const image = cartProducts[i].image
    const title = cartProducts[i].title
    const spanid = cartProducts[i].spanid
    const color = cartProducts[i].color
    const size = cartProducts[i].size
    const price = cartProducts[i].price
    let newCartProductContent = `
    <div class="product-header cart"><img src="${image}" alt="" /></div>
        <div class="product-content">
            <h3 class="product-title" id="product-title">
            ${title} 
            </h3>
            <div class="product-description">
                <ul class="product-description-text cart">
                    <li>Color: <span id="${spanid}">${color} </span></li>
                    <li>Size: ${size} </li>
                    <li>Quantity: <input type="number" class="product-description-quantity" min="1" placeholder="1" value="1"></li>
                </ul>
                <p class="product-description-price" id="price${id}">
                ${price} 
                </p>
                <a href="#" onclick="lsdel(\'newProduct\',\''+${id}+'\');" class="product-description-add cart-remove">Remove<i class="fas fa-trash"></i></a>
            </div>
        </div>`
    newCartProduct.innerHTML = newCartProductContent
    let cartItems = document.getElementsByClassName('products_container_first-row')[0]
    cartItems.append(newCartProduct)
    function lsdel(storage_name, value) {
        if (localStorage.getItem(storage_name) === null) {} else {
          var ls_data = JSON.parse(localStorage.getItem(storage_name));
          var index = ls_data.findIndex(({id}) => id == value);
          if (index == -1) {} else {
            ls_data.splice(index, 1);
            localStorage.setItem(storage_name, JSON.stringify(ls_data));
            document.getElementById(value).remove()
            total()
            cartProductsNumber()
          }
        }
    }
}

function cartProductsNumber(){
    let windowCartProducts = JSON.parse(window.localStorage.getItem("newProduct"));
    let productsInCart = document.getElementsByClassName('cartProducts')[0]
    let productsAdded = 0
    for(let i = 0; i < windowCartProducts.length; i++){
        productsAdded = windowCartProducts.length
    }
    productsInCart.innerHTML = productsAdded + `<i class="fas fa-shopping-cart"></i>`
}

function total(){
    let total = 0
    let products = document.getElementsByClassName('product')
    for (let i = 0; i < products.length; i++){
        let product = products[i]
        let priceElement = product.getElementsByClassName('product-description-price')[0]
        let quantityElement = product.getElementsByClassName('product-description-quantity')[0]
        let price = parseFloat(priceElement.innerText.replace('$', ''))
        let quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('products_container-total_span')[0].innerText = '$' + total

}

function ready(){
    let quantityInputs = document.getElementsByClassName('product-description-quantity')
    for (let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
}

function quantityChanged(event){
    let input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    } 
    total()
}