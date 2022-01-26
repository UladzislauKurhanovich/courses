let $startButton = document.querySelector('#start')
let $startGame = document.querySelector('#game')
let $time = document.querySelector('#time')
let $timeHeader = document.querySelector('#time-header')
let $resultHeader = document.querySelector('#result-header')
let $result = document.querySelector('#result')
let $gameTime = document.querySelector('#game-time') 

let score = 0
isGameStarted = false



$startButton.addEventListener('click', startGame)
$startGame.addEventListener('click', handleBoxClick)
$gameTime.addEventListener('input', setGameTime)



function startGame() {
    setGameTime()
    score = 0
    $gameTime.setAttribute('disabled', 'true')
    $timeHeader.classList.remove('hide')
    $resultHeader.classList.add('hide')
    isGameStarted = true
    $startButton.classList.add('hide')
    $startGame.style.backgroundColor = "#fff"

    var interval = setInterval(function(){
        let time = parseFloat($time.textContent)
        if (time <= 0){
            clearInterval(interval)
            endGame()
        }else {
            $time.textContent = (time - 0.1).toFixed(1)
        }
    }, 100)

    renderBox()

}

function setResutl() {
    $result.textContent = score.toString()
}

function setGameTime() {
    let time = parseInt($gameTime.value)
    $time.textContent = time.toFixed(1)

}

function endGame() {
    $gameTime.removeAttribute('disabled')
    isGameStarted = false
    setResutl()
    $startButton.classList.remove('hide')
    $startGame.style.backgroundColor = '#ccc'
    $startGame.innerHTML = ''
    $timeHeader.classList.add('hide')
    $resultHeader.classList.remove('hide')


}


function renderBox() {
    $startGame.innerHTML = ''                               
    let boxSize = getRandom(30, 100)
    let boxColor = getRandomColor()
    let box = document.createElement('div')
    let gameSize = $startGame.getBoundingClientRect()
    let maxTop = gameSize.height - boxSize
    let maxleft = gameSize.width - boxSize

    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = boxColor
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxleft) + 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')

    $startGame.insertAdjacentElement('afterbegin', box)

}

function handleBoxClick(event) {
    if(!isGameStarted){
    return
    }
    if(event.target.dataset.box) {
        renderBox()
        score++
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)

}

function getRandomColor() {
    let r = (Math.random()*(220-0)).toFixed(0).toString()
    let g = (Math.random()*(220-0)).toFixed(0).toString()
    let b = (Math.random()*(220-0)).toFixed(0).toString()
    let randomColor = 'rgb('+ r + ',' + g + ',' + b +')'
return randomColor

}
