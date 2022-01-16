const ph1 = document.getElementById('ph1');
const ph2 = document.getElementById('ph2');
const ph3 = document.getElementById('ph3');
const ph4 = document.getElementById('ph4');
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2000)
setTimeout(cartProductsNumber, 2000)
function getData() {
  ph1.innerHTML =
    '<img src="../img/products/1.jpg" alt="" />'
    ph2.innerHTML =
    '<img src="../img/products/2.jpg" alt="" />'
    ph3.innerHTML =
    '<img src="../img/products/3.jpg" alt="" />'
    ph4.innerHTML =
    '<img src="../img/products/4.jpg" alt="" />'
  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
function cartProductsNumber(){
  let windowCartProducts = JSON.parse(window.localStorage.getItem("newProduct"));
  let productsInCart = document.getElementById('cartProducts')
  let productsAdded = 0
  for(let i = 0; i < windowCartProducts.length; i++){
      productsAdded = windowCartProducts.length
  }
  productsInCart.innerHTML = productsAdded + `<i class="fas fa-shopping-cart"></i>`
}