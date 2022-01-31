const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
let time = 0
let score = 0
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let intervalTime
const againBtn = document.createElement('button')
const tableResultBtn = document.createElement('button')
const tableBody = document.querySelector('#table-result tbody')
const tableResulMas = []

//debug

// screens[0].classList.add('up')
// screens[1].classList.add('up')
// // screens[3].classList.add('up')
// screens[0].classList.add('hide')
// screens[1].classList.add('hide')
// // screens[3].classList.add('hide')

class User {
    constructor(name, score, date) {
        this.name = name
        this.score = score
        this.date = date
    }
}

let nowDate = getFormattedDate(new Date())

function getFormattedDate(date) {
let hours = date.getHours()
let minutes = date.getMinutes()
let month = date.getMonth() + 1
let year = date.getFullYear()
let day = date.getDate()
let dateMas = [hours, minutes, month, day]

for (let i = 0; i < dateMas.length; i++){
    if(dateMas[i] < 10) {
        dateMas[i] = `0${dateMas[i]}`
    }
}

return `${dateMas[3]}.${dateMas[2]}.${year} ${dateMas[0]}:${dateMas[1]}`;
}

// finishGame()

againBtn.innerHTML = "Играть снова"
tableResultBtn.innerHTML = "Таблица рекордов"


againBtn.removeEventListener('click', funcList)

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')

})

timeList.addEventListener('click', event => {
   if (event.target.classList.contains('time-btn')) {
       time = parseInt(event.target.getAttribute('data-time'))
       screens[1].classList.add('up')
       startGame()
   }

})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    score = 0
    board.innerHTML = ``
    intervalTime = setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
    
}

function decreaseTime() {
    if (time === 0){
        finishGame()
    } else {
      let current = --time
    if (current < 10) {
        current = `0${current}`  
    }
    setTime(current)
    }
    
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    clearInterval(intervalTime)
    timeEl.parentNode.classList.add('hide')
    setTimeout(() => {
    let name = prompt('Вы поставили новый рекорд! Введите имя для сохранения в таблицу рекордов', 'user')
    if (name === null){
        name = 'noname'
    }
    let user = new User(name, score, nowDate)
    tableResulMas.unshift(user)
    console.log(tableResulMas)
    if(JSON.parse(localStorage.getItem('newScore')) != null){
        newMas = tableResulMas.concat(JSON.parse(localStorage.getItem('newScore')))
    }else{
        newMas = tableResulMas
    }
    newMas.sort(function (a, b) {
        if (a.score > b.score) {
          return 1;
        }
        if (a.score < b.score) {
          return -1;
        }
        return 0;
      })
    let userJson = JSON.stringify(newMas)
    localStorage.setItem('newScore', userJson)
    let parseJsonMas = JSON.parse(localStorage.getItem('newScore'))
    console.log(parseJsonMas)
    }, 100);

    const brTg = document.createElement('br')
    const brTg1 = document.createElement('br')

    againBtn.classList.add('time-btn')
    tableResultBtn.classList.add('time-btn')

    board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`

    const boardH1 = document.querySelector('.board h1')
    boardH1.appendChild(brTg)
    boardH1.appendChild(againBtn)
    boardH1.appendChild(brTg1)
    boardH1.appendChild(tableResultBtn)
    againBtn.addEventListener('click', funcList)
    tableResultBtn.addEventListener('click', rethultList)
}

function rethultList() {
    screens[0].classList.add('up')
    screens[1].classList.add('up')
    screens[2].classList.add('up')
    board.classList.add('hide')
    tableResultPage()
    tableBody.innerHTML = newRow
    // timeEl.parentNode.classList.remove('hide') 
}

function funcList() {
    screens[1].classList.remove('up')
    timeEl.parentNode.classList.remove('hide') 
}

let newRow = ''

function tableResultPage () {
    newMas.forEach(element => {
    newRow = `<tr><td>${element.name}</td><td>${element.score}</td><td>${element.date}</td></tr>${newRow}`
    
});

}

function createRandomCircle() {
    const circle = document.createElement('div')
    const {width, height} = board.getBoundingClientRect()
    const size = getRandomNumber(60, 20)
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    let r = getRandomNumber(0, 255)
    let g = getRandomNumber(0, 255)
    let b = getRandomNumber(0, 255)
    
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.classList.add('circle')
    circle.style.background = `rgb(${r}, ${g}, ${b})`
    circle.style.width = circle.style.height = `${size}px`

    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
} 
