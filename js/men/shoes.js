const ph1 = document.getElementById('ph1');
const ph2 = document.getElementById('ph2');
const ph3 = document.getElementById('ph3');
const ph4 = document.getElementById('ph4');
const ph5 = document.getElementById('ph5');
const ph6 = document.getElementById('ph6');
const ph7 = document.getElementById('ph7');
const ph8 = document.getElementById('ph8');
const ph9 = document.getElementById('ph9');
const ph10 = document.getElementById('ph10');
const ph11 = document.getElementById('ph11');
const ph12 = document.getElementById('ph12');
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2000)
setTimeout(cartProductsNumber, 2000)

function getData() {
  ph1.innerHTML =
    '<img src="../../img/products/mshoes1.jpg" alt="" />'
    ph2.innerHTML =
    '<img src="../../img/products/mshoes2.jpg" alt="" />'
    ph3.innerHTML =
    '<img src="../../img/products/mshoes3.jpg" alt="" />'
    ph4.innerHTML =
    '<img src="../../img/products/mshoes4.jpg" alt="" />'
    ph5.innerHTML =
    '<img src="../../img/products/mshoes5.jpg" alt="" />'
    ph6.innerHTML =
    '<img src="../../img/products/mshoes6.jpg" alt="" />'
    ph7.innerHTML =
    '<img src="../../img/products/mshoes7.jpg" alt="" />'
    ph8.innerHTML =
    '<img src="../../img/products/mshoes8.jpg" alt="" />'
    ph9.innerHTML =
    '<img src="../../img/products/mshoes9.jpg" alt="" />'
    ph10.innerHTML =
    '<img src="../../img/products/mshoes10.jpg" alt="" />'
    ph11.innerHTML =
    '<img src="../../img/products/mshoes11.jpg" alt="" />'
    ph12.innerHTML =
    '<img src="../../img/products/mshoes12.jpg" alt="" />'
  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
    
const array = [ph1, ph2, ph3, ph4, ph5, ph6, ph7, ph8, ph9, ph10, ph11, ph12];
const products = array.length
const productsDisplay = document.getElementById('products_display')
productsDisplay.innerHTML = `Showing ${products} products`

function cartProductsNumber(){
  let windowCartProducts = JSON.parse(window.localStorage.getItem("newProduct"));
  let productsInCart = document.getElementById('cartProducts')
  let productsAdded = 0
  for(let i = 0; i < windowCartProducts.length; i++){
      productsAdded = windowCartProducts.length
  }
  productsInCart.innerHTML = productsAdded + `<i class="fas fa-shopping-cart"></i>`
}