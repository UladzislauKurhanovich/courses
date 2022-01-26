const item = document.querySelector('.item')
const placeHolders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

function dragStart(event) {
    event.target.classList.add('hold')
    setTimeout(function(){
    event.target.classList.add('hide')
    }, 0)

}

function dragEnd(event) {
    event.target.classList.remove('hold', 'hide')
}

for (const placeHolder of placeHolders){
    placeHolder.addEventListener('dragover', dragover)
    placeHolder.addEventListener('dragenter', dragenter)
    placeHolder.addEventListener('dragleave', dragleave)
    placeHolder.addEventListener('drop', drop)

}

function dragover(event) {
    event.preventDefault()

}

function dragenter(event) {
    event.target.classList.add('hovered')

}

function dragleave(event) {
    event.target.classList.remove('hovered')

}

function drop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)

}