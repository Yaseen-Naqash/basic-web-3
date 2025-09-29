let mylinks = document.querySelectorAll('.product .mybutton')
let product = document.getElementById('big-product')

function open_product(){
    product.classList.toggle('window-open')
}
mylinks.forEach(element => {
    
    element.addEventListener('click', open_product)
});