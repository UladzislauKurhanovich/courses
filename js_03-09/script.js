// var p = document.querySelectorAll('p')

// for (var i = 0; i < p.length; i++) {
//   p[i].addEventListener('click', function(event) {
//     event.target.style.color = 'blue'
//   })
// }

// document.getElementById('wrapper').addEventListener('click', function(event) {
//   var tagName = event.target.tagName.toLowerCase()

//   if (tagName === 'p') {
//     event.target.style.color = 'blue'
//   }

//   if (event.target.classList.contains('color')) {
//     event.target.style.color = 'red'
//   }
// })

// var p = document.querySelectorAll('p')

// for (i = 0; i < p.length; i++){
//   p[i].addEventListener('click', function(event){
//     event.target.style.color = 'white'
//   })
// }
let wrapper = document.getElementById('wrapper')
// wrapper.addEventListener('click', function(event){
//   let tagName = event.target.tagName.toLowerCase()
//   if (tagName === 'p'){
//     event.target.style.color = 'red'
//   }
// })
wrapper.addEventListener('click', function(event){
let tagName = event.target.tagName.toLowerCase()
let color = event.target.style.color
if(tagName === 'p'|| tagName === 'li'){
  if(color === 'red'){
    event.target.style.color = 'black'
  }else{
    event.target.style.color = 'red'
  }
    
  }
})