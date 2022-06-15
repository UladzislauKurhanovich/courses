// let promise = new Promise(function(resolve, reject) {
//     let i = 8
//     console.log("промис здесь")
//     if (i < 8) {
//         resolve()   
//     } else {
//         reject()
//     }
// })

// promise.then(function() {
//     return new Promise(function(resolve, reject) {
//         console.log("следующий промис");
//         resolve()
//     }
// )})

// .then(function() {
//     console.log("последний промис");
// })

// promise.catch(function() {
//     console.error("что-то пошло не так");
// })

function hello() {
    console.log('Hello', this)
    const person = { 
        name: 'vlad',
        age: 28,
        sayHello: hello,
        seyHelloWindow: hello.bind(document),
        logInfo: function () {
            console.log(`${this.name} info:`)
            console.log(`Name is ${this.name}`)
            console.log(`Age is ${this.age}`)
            console.groupEnd()
        }
    }
    person.logInfo()
    const lena = {
        name: 'Elena',
        age: '20'
    }
    person.logInfo.bind(lena)()
}

hello()


