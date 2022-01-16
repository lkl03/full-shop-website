const ph9 = document.getElementById('ph9');
const ph10 = document.getElementById('ph10');
const ph11 = document.getElementById('ph11');
const ph12 = document.getElementById('ph12');
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2000)
setTimeout(cartProductsNumber, 2000)

function getData() {
  ph9.innerHTML =
    '<img src="../img/products/9.jpg" alt="" />'
    ph10.innerHTML =
    '<img src="../img/products/10.jpg" alt="" />'
    ph11.innerHTML =
    '<img src="../img/products/11.jpg" alt="" />'
    ph12.innerHTML =
    '<img src="../img/products/12.jpg" alt="" />'
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