let loadBtn = document.querySelector('#load');
loadBtn.addEventListener('click', load);
async function load() {
    let url = 'https://jsonplaceholder.typicode.com/users'
    let response = await fetch(url);
    let data = await response.json();
    
        let ul = document.querySelector('#list')
        let html = data.map((element) => 
        '<li>' + element.id + '. ' + element.name + '</li>'
        )
        
        ul.insertAdjacentHTML('afterbegin', html.join(' '))
}