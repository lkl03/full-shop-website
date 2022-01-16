const bars = document.getElementById("bars")
const menu = document.getElementById("menu")

function Toggle() {
    bars.classList.toggle('closed')
    menu.classList.toggle('closed')
    bars.classList.toggle('opened')
    menu.classList.toggle('opened')
}

function execute(){
    if (bars.classList.contains('closed')){
        bars.addEventListener('click', Toggle)
    }
}
execute();

