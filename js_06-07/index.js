// function printObject(objName) {
//   console.log('Printing object: ', objName)
//   for (var key in this) {
//     if (this.hasOwnProperty(key)) {
//       console.log('[' + key + ']', this[key])
//     }
//   }
// }



// var person = {
//   firstName: 'Max',
//   job: 'Backend',
//   age: 29,
//   friends: ['Elena', 'Igor']
// }

// var car = {
//   name: 'Ford',
//   model: 'Focus',
//   year: 2017
// }

// var printPerson = printObject.bind(person)
// printPerson('Person')






// let ford = Object.create({
//   calculateDistancePerYear: function() {
//     Object.defineProperty(this, 'distancePerYear', {
//       value: Math.ceil(this.distance / this.age),
//       enumerable: false,
//       writable: false,
//       configurable: false
//     })
//   }
// }, {
//   model: {
//     value: 'mondeo',
//     enumerable: true,
//     writable: false
// },
//   year: {
//     value: '2019',
//     enumerable: true,
//     writable: false
// },
//   distance: {
//     value: '13000',
//     enumerable: true,
//     writable: true
// },
//   colour: {
//     value: 'red',
//     enumerable: true,
//     writable: false
// },
//   age: {
//     enumerable: true,
//     get: function() {
//        console.log('Получаем возраст')
//        return new Date().getFullYear() - this.year
//     },
//     set: function() {
//       console.log('Устанавливаем значение')
//     }
//   }
// })

// ford.calculateDistancePerYear()

// console.log(ford)

// for (let key in ford){
//   if (ford.hasOwnProperty(key))
//   console.log(key, ford[key])
// }


// printObject.call(car, 'Car')

// printObject.apply(person, ['Person'])


// let person = {
//   name: 'kolya',
//   age: 20,
//   job: 'frontend'
// }

// // for (let key in person){
// //   console.log(key, ': ', person[key])
// // }

// // let keys = Object.keys(person)
// // console.log(keys)


// Object.keys(person).forEach(function(key) {
//   console.log(person[key])
// }
// )


// let createCounter = function(counterName) {
//   let counter = 0

//   return {
//     increment: function() {
//       counter++
//     },
//     dectement: function(){
//       counter--
//     },
//     getCounter: function(){
//       return counter
//     }

//   }
// }

// let counterA = createCounter('CounterA')
// let counterB = createCounter('CounterB')


// let person = {
//   name: 'Max',
//   Year: 20,
//   job: 'Frontend',
//   displayInfo: function(ms){

//     setTimeout(function() {
//     console.log('name:', this.name)
//     console.log('Year:', this.Year)
//     console.log('job:', this.job)
//     }.bind(this), ms)
//   }
// }

// person.displayInfo(2000)



// function printObject(objName){
//   console.log('Printing object:', objName)
//  for(let key in this) {
//    if(this.hasOwnProperty(key)){
//      console.log('[' + key + ']', this[key])
//    }
//  }
// }

// let person = {
//    name: 'Max',
//    Year: 20,
//    job: 'Frontend',
//    friends: ['vlad', 'lesha', 'anton']
// }

// let car = {
//   model: 'focus',
//   Year: '2018',
//   name: 'Ford'
// }


// let printPerson = printObject.bind(person)
// printPerson('Person')


// printObject.call(car, 'car')


let mas1 = [1, 4, 7, 'vlad']
let mas2 = [5, 'vlad', 11]

Array.prototype.doubleMas = function() {
  let newArray = this.map(function(item) {
    if (typeof item === 'string') {
      return item += item
    }else{
      return Math.pow(item, 2)
    }
  })
  return newArray

}

let newA = mas1.doubleMas()
let newB = mas2.doubleMas()

console.log('A', newA)
console.log('B', newB)