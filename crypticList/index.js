const links = document.querySelectorAll('li')
let display = document.querySelector('.display')

links.forEach((link) => {
    link.addEventListener('mouseover', (e) => {
        display.style.background = `url('./img/${e.target.id}.png')`
        display.style.display = "flex"
        display.style.backgroundPosition = "center"
        display.style.backgroundSize = "contain"
        display.style.height = "320px"
        display.style.width = "500px"
        display.style.visibility = "visible"
    })
    link.addEventListener('mouseout', () => {
        display.style.visibility = "hidden"
    } )
})

window.addEventListener('mousemove', (e) => {
    display.style.left = e.pageX + 100 + "px"
    display.style.top = e.pageY - 150 + "px"
})