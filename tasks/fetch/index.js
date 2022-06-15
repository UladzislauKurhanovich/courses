let loadBtn = document.querySelector('#load');
loadBtn.addEventListener('click', load);

function load() {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(function(response) {
            console.log(response);
            return response.json()
        })
        .then(function(data) {
            let ul = document.querySelector('#list')
            let html = data.map((element) => 
                '<li>' + element.id + '. ' + element.title + ' | ' + element.body + '</li>'
            )            
            ul.insertAdjacentHTML('afterbegin', html.join(' '));
        })
}

