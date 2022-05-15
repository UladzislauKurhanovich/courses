// class -> .CLASS_NAME
// id -> #ID
// tag -> TAG_NAME
var a = document.querySelector('a')
var oldHref = a.getAttribute('href')
a.setAttribute('href', 'https://ya.ru')
a.setAttribute('title', 'Go to yandex')
a.textContent = 'Yandex'
console.log(a.attributes)

let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')
// let actionBox = box.classList('.box')
box1.classList.add('red')
box2.classList.add('blue')
// box2.classList.remove('blue')
// let hasClassBox1 = box1.classList.contains('red')
// console.log(hasClassBox1)
//  if(hasClassBox1){
//      box1.classList.remove('red')
//  }else{
//      box1.classList.add('red')
//  }

let button = document.querySelector('button')
let h1 = document.querySelector('h1')
let input = document.querySelector('input')

function buttonHandler(){
    console.log('clicked')
    h1.textContent = input.value
}

button.addEventListener('click', buttonHandler)

h1.addEventListener('mouseenter', function(){
    this.style.color = 'red'
    this.style.fontFamily = 'Georgia, serif'
})
h1.addEventListener('mouseleave', function(){
    this.style.color = 'black'
    this.style.fontFamily = 'standart'
})


let divs = document.querySelectorAll('div')

for(let i=0; i < divs.length; i++){
    divs[i].addEventListener('click', function(){
        console.log(this.getAttribute('id')) 
    })

}