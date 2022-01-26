const board = document.querySelector('#board')
const SQUARES_NUMBER = 992
const colors = []

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () =>
        setColor(square))
        
    square.addEventListener('mouseleave', () =>
        removeColor(square))

    board.append(square)
}

function getRandomColor() {
    for (let i = 0; i < 50; i++){
        colors[i] = `rgb(${Math.ceil((Math.random()*255))}, ${Math.ceil((Math.random()*255))}, ${Math.ceil((Math.random()*255))})`
    }
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'

}