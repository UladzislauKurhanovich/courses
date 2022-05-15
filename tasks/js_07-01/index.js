
// for (let i = 0; i < 6; i++) {
//     setTimeout(function() {
//         console.log(i)
//     }, 3000)
// }


// const person = {
//     name: 'vasya',
//     year: '20', 
//     logName() {
//         setTimeout(() => {
//             console.log(this.name)
//         }, 2000)
//     }
    
// }


// const createPost = (title, text, date) => {
//     return {
//         title: title,
//         text: text,
//         date: date

//     }
// }

// const post = createPost('sdfasdf', 'vava', '20.04.1994')
// console.log(post)







// const form = document.querySelector('form')

// form.addEventListener('submit', event => {

//     event.preventDefault()
    
//     const title = form.title.value
//     const text = form.text.value

//     saveForm({title, text})
// })

// function saveForm(data){
//     const formData = {
//         data: new Date().toLocaleDateString()
//     }

//     console.log('Form date:' + formData)
// }

// const numbers = [1, 3, 4, 8, 9, 12]

const numbersFeb = []

const $firstNumber = document.querySelector('#firstNum')

let $length = document.querySelector('#length')

let $button = document.querySelector('#sendBut')

let $result = document.querySelector('#result')

$button.addEventListener('click', createMas)


function createMas() {
for (var i = 0; i < parseInt($length.value); i++) {
    if (i > 1){
    numbersFeb[i] = numbersFeb[i-1] + numbersFeb[i-2]
    }else{
    numbersFeb[i] = parseInt($firstNumber.value)
    }
}
$result.innerHTML = numbersFeb.toString()
}


// const cars = ['Ford', 'Mercedes', 'Audi', 'BMW']

// const upperCaseCars = cars.map(car =>
//     car.toUpperCase())

// console.log(upperCaseCars)

// const people = [
//     {name: 'Petya', budget: 2000},
//     {name: 'Vasya', budget: 3000},
//     {name: 'Lena', budget: 3500}
// ]

// console.log(people.includes({name: 'Petya', budget: 2000}))


// const personFinder = people.find(person => person.budget === 3500)

// console.log(personFinder.name)
