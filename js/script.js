
let a = 13
a--
let b = 'hello worrld'
let c = 2.72
let d = true
let e = ['apple', 'bannana', 'pineapple', 'cherry']
if (a > 15) {
    console.log('a was greater')
}
else if (a == 15) {
    console.log('a was equal')
}
else {
    console.log('a was lesser')
}
e.forEach(fruit => {
    console.log(fruit)
});
for (let i = 0; i < 5; i++) {
    console.log(i)
}
function myfunction(a, b) {
    return a
}


// sum of 1 to n
let n = 10
let sum = 0

for (let i = 1; i <= n; i++) {
    sum += i

}

console.log(sum)





// ---------------------------------------------------------



let h = 17


let twindow = document.getElementById('mywindow')





function open_window() {
    twindow.style.display = 'flex'

}

function close_window() {
    twindow.style.display = 'none'

}

function class_changes() {
    twindow.classList.toggle('customized')
}


let myelement = document.getElementById('mybox')



function test() {
    myelement.classList.toggle('box-open')
}
myelement.addEventListener('click', test)











