const notch = document.getElementById('notch')

const nav = document.querySelector('nav')

notch.addEventListener('click', () => {
    if(nav.style.right == "0px"){
        nav.style.right = "-4em"
    }
    else {
        nav.style.right = "0px"
    }
})

let x = 0

notch.addEventListener('mousedown', (e) => {
    x = e.clientX
})

notch.addEventListener('mouseout', (e) => {
    if(e.clientX > x){
        nav.style.right = "0px"
    }
})