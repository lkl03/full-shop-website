const getwomenLook = document.getElementById("getwlook");
const getmenLook = document.getElementById("getmlook");
const getlook1 = document.getElementById("look1");
const getlook2 = document.getElementById("look2");
const closer1 = document.getElementById("closer1");
const closer2 = document.getElementById("closer2");


function showlook1 (){
    getlook1.style.display = "block";
}
function showlook2 (){
    getlook2.style.display = "block";
}
function closelook1 (){
    getlook1.style.display = "none";
}
function closelook2 (){
    getlook2.style.display = "none";
}

getwomenLook.addEventListener("click", showlook1);
getmenLook.addEventListener("click", showlook2);
closer1.addEventListener("click", closelook1);
closer2.addEventListener("click", closelook2);

setTimeout(cartProductsNumber, 2000)
function cartProductsNumber(){
    let windowCartProducts = JSON.parse(window.localStorage.getItem("newProduct"));
    let productsInCart = document.getElementById('cartProducts')
    let productsAdded = 0
    for(let i = 0; i < windowCartProducts.length; i++){
        productsAdded = windowCartProducts.length
    }
    productsInCart.innerHTML = productsAdded + `<i class="fas fa-shopping-cart"></i>`
  }
