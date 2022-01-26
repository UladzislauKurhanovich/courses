alert('Welcom to Sun Tropez!!!!')
// let year = 27
// let hight = 183
// let weight = 75
// let str = 'hi-hi'
// console.log('How old are you? ', year)
// console.log(typeof str)
// console.log(4 === '4')
// console.log(true&&!false)
// let currentYear = 2021
// let carName = 'Audi'
// let carYear = 2011
// let carAge = currentYear - carYear
// if(carAge < 5){
//     console.log(carName + ' новье, машине: ' + carAge + 'г.')
// }else if(carAge >= 5 && carAge <= 10){
//     console.log(carName + ' помойка, машине: ' + carAge + 'г.')
// } else{
//     console.log(carName + carYear + 'Лет')
// }
// let personYear = 17
// let message = personYear >= 18
// ? 'совершеннолетний'
// : 'не совершеннолетний'
// console.log(message)
// let car = 'кар'
// let person = 'чел'
// function checkAndLogAge(obj) {
//     if (obj === 'кар') {
//     console.log('Машина')
//     }
//     else if (obj === 'чел') {
//     console.log('Человек')

//     }
//     else {
//     console.log('Неопознанный объект')
//     }
// }
// checkAndLogAge(car)
// checkAndLogAge(person)

let cars = [1, 2, 3, 'ford']
console.log(cars)
console.log(cars[3])
console.log(cars.length)
cars.push('audi')
console.log(cars)

// cars.pop()
// console.log(cars)
var audi = cars.pop()
console.log(audi)
console.log(cars)
console.log(cars.indexOf('ford'))
let index = cars.indexOf('ford')
let fEl = cars[index]
console.log(fEl)


// for (i = 1; i <= 5; i++){
//     console.log(i)
// }
// let massiv = ['привет', 'пока', 'салют', 'хай']
let massiv = [1, 2, 3, 4, 5]
// massiv.push(3)
for (i = 0; i < massiv.length; i++) {
    if (massiv[i]%2 !== 0){
    console.log(massiv[i])
    }
}