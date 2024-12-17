const card = document.querySelector('.card')
const images = document.querySelector('.images')

card.addEventListener('click', (e) => {
    images.classList.toggle('active')
    images.querySelectorAll('img').forEach((image) => {
        images.classList.contains('active') ? image.style.position = "relative" : image.style.position = "absolute"
    })
})

card.addEventListener('mouseover', () => {
    if(!images.classList.contains('active')){
        card.style.scale = 0.95
        images.style.rotate = "-2deg"
    }
    else {
        card.style.scale = 1
        images.style.rotate = "0deg" 
    }

})

card.addEventListener('mouseout', () => {
    card.style.scale = 1
    images.style.rotate = "0deg"
})

document.addEventListener('click', (e) => {
    if(images.classList.contains('active') && e.target.classList == "container"){
        images.classList.toggle('active')
        images.style.transition = "all 0.3s ease"
        images.querySelectorAll('img').forEach((image) => {
            images.classList.contains('active') ? image.style.position = "relative" : image.style.position = "absolute"
        })
    }
})