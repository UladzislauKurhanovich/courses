export function renderPost(post, options = {}) {
    const tag = post.type === 'news'
    ?  '<li class="tag tag-blue tag-rounded">Новость</li>'
    :  '<li class="tag tag-rounded">Заметка</li>';
    
    const saveButton = (JSON.parse(localStorage.getItem('favorites')) || []).includes(post.id) 
    ? `<button class="button-danger button-round button-small" data-id="${post.id}">Удалить</button>`
    : `<button class="button-primary button-round button-small" data-id="${post.id}">Coхранить</button>`

    return `
        <div class="panel">
            <div class="panel-head">
                <p class="panel-title">${post.title}</p>
                <ul class="tags">
                ${tag}
                </ul>
            </div>
            <div class="panel-body">
                <p class="multi-line">${post.fulltext}</p>
            </div>
            <div class="panel-footer w-panel-footer">
                <small>${post.date}</small>
                ${options.withButton ? saveButton : ' '}
            </div>
        </div>
        `;
}