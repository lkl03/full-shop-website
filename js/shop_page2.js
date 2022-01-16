const ph5 = document.getElementById('ph5');
const ph6 = document.getElementById('ph6');
const ph7 = document.getElementById('ph7');
const ph8 = document.getElementById('ph8');
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2000)
setTimeout(cartProductsNumber, 2000)

function getData() {
    ph5.innerHTML =
    '<img src="../img/products/5.jpeg" alt="" />'
    ph6.innerHTML =
    '<img src="../img/products/6.jpg" alt="" />'
    ph7.innerHTML =
    '<img src="../img/products/7.jpg" alt="" />'
    ph8.innerHTML =
    '<img src="../img/products/8.jpg" alt="" />'
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