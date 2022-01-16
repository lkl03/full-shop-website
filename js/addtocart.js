let addCartItemButtons = document.getElementsByClassName('product-description-add')
for (let i = 0; i < addCartItemButtons.length; i++){
    let button = addCartItemButtons[i]
    button.addEventListener('click', function(event){
        let buttonClicked = event.target
        let getProdId = buttonClicked.parentElement.parentElement.parentElement.getAttribute('data-prodid')
        let getTitle = buttonClicked.parentElement.parentElement.parentElement.querySelector('.product-title').innerText
        let getImage = buttonClicked.parentElement.parentElement.parentElement.querySelector('.product-header img').src
        let getColor = buttonClicked.parentElement.parentElement.querySelector('.product-description-text li span').innerText
        let getSize = buttonClicked.parentElement.parentElement.querySelector('.product-description-text li select').value
        let getPrice = buttonClicked.parentElement.parentElement.querySelector('.product-description-price').innerText
        let getSpan = buttonClicked.parentElement.parentElement.querySelector('li span').getAttribute('id')
        let oldItems = JSON.parse(localStorage.getItem('newProduct')) || [];
        let newItem = {
            'id': getProdId,
            'title': getTitle,
            'image': getImage,
            'color': getColor,
            'size': getSize,
            'price': getPrice,
            'spanid': getSpan,
        };
        
        if(localStorage.getItem('newProduct') == null) {
            oldItems.push(newItem);
            localStorage.setItem('newProduct', JSON.stringify(oldItems));
            buttonClicked.innerHTML = "Cart updated!"
        } else {
            let data = JSON.parse(localStorage.getItem('newProduct'))
            let idCheck = data.filter(x => x.id === newItem.id).map(x => x.foo);
            let idCheckResults = idCheck.length
            let sizeCheck = data.filter(x => x.size === newItem.size).map(x => x.foo);
            let sizeCheckResults = sizeCheck.length
            if(idCheckResults > 0 && sizeCheckResults > 0){
                buttonClicked.classList.add('clicked')
                buttonClicked.innerHTML = "Item already added!"
            }else{
                oldItems.push(newItem);
                localStorage.setItem('newProduct', JSON.stringify(oldItems));
                buttonClicked.innerHTML = "Cart updated!"
            }
        }
        let windowCartProducts = JSON.parse(window.localStorage.getItem("newProduct"));
        let productsInCart = document.getElementById('cartProducts')
        let productsAdded = 0
        for(let i = 0; i < windowCartProducts.length; i++){
            productsAdded = windowCartProducts.length
        }
        productsInCart.innerHTML = productsAdded + `<i class="fas fa-shopping-cart"></i>`
    })
} 

