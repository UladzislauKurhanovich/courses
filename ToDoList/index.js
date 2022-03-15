const input = document.querySelector('.input-text');
const inputBtn = document.querySelector('.submit-btn');
const mainList = document.querySelector('.list');
let arrayList = [];

inputBtn.addEventListener('click', () => {
    console.dir(input)
    if (input.value) {
        if(localStorage.getItem('dealList')) {
            console.log(localStorage.getItem('dealList'))
        }else{
            console.log('Пусто')
        }
        let listEl = `<li>${input.value}</li>`;
        arrayList.push(listEl);
        arrayString = JSON.stringify((localStorage.setItem('dealList', arrayList)));
        
        let arrayJoin  = arrayList.join('');
        console.log(arrayJoin);
    }
})