const childs = document.querySelectorAll('.parent div')

childs.forEach((child) => {
    child.addEventListener('click', (e) => {
        if(child.classList.contains('active')){
            child.classList.remove('active')
            childs.forEach((child) => {
                child.classList.remove('active')
                child.style.width = 130 + "px"
                child.style.opacity = 1;
            })
        }
        else {
            childs.forEach((child) => {
                child.classList.remove('active')
                child.style.width = 90 + "px"
                child.style.opacity = 0.9;
            })
            child.classList.add('active')
        }
    }) 
})