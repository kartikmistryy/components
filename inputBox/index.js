
const input = document.querySelector('input')

input.addEventListener('keydown', (e) => {
    if(e.key == "Backspace"){
        input.classList.add('active')

        setTimeout(() => {
            input.classList.remove('active')
        }, 100)
    }
})
