const downButton = document.querySelector('.down-button')
const upButton = document.querySelector('.up-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const mainSlidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')

let activeSlidIndex = 0

sidebar.style.top = `-${(mainSlidesCount - 1) * 100}vh`

downButton.addEventListener('click', () => {
    changeSlide('down')
})

upButton.addEventListener('click', () => {
    changeSlide('up')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp'){
        changeSlide('up')
    } else if (event.key === 'ArrowDown') {
        changeSlide('down')

    }
})

function changeSlide(direction){
    if (direction === 'up') {
        activeSlidIndex++
        if (activeSlidIndex === mainSlidesCount) {
            activeSlidIndex = 0
        }
    } else if (direction === 'down') {
        activeSlidIndex--
        if(activeSlidIndex < 0){
            activeSlidIndex = mainSlidesCount-1
        }

    }

    const pageHeight = container.clientHeight
    
    mainSlide.style.transform = `translateY(-${activeSlidIndex * pageHeight}px)`

    sidebar.style.transform = `translateY(${activeSlidIndex * pageHeight}px)`

}

window.addEventListener(`resize`, event => {
    const pageHeight = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlidIndex * pageHeight}px)`
    sidebar.style.transform = `translateY(${activeSlidIndex * pageHeight}px)`



})