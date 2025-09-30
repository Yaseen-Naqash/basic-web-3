let mylinks = document.querySelectorAll('.product .mybutton')
let product = document.getElementById('big-product')

function open_product(){
    product.classList.toggle('window-open')
}
mylinks.forEach(element => {
    
    element.addEventListener('click', open_product)
});


let open_button = document.getElementById('button-open')
let close_button = document.getElementById('button-close')

let mobile_menu = document.getElementById('mobile-menu')



function menu_toggle(){
    mobile_menu.classList.toggle('mobile-menu-open')
}


open_button.addEventListener('click',menu_toggle)
close_button.addEventListener('click', menu_toggle)