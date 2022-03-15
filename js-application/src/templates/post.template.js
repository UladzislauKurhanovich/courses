export function renderPost(post, options = {}) {
    const tag = post.type === 'news'
    ?  '<li class="tag tag-blue tag-rounded">Новость</li>'
    :  '<li class="tag tag-rounded">Заметка</li>';

    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const condidate = favorites.find(p => p.id === post.id)

    const saveButton = condidate
    ? `<button class="button-danger button-round button-small" data-id="${post.id}" data-title="${post.title}">Удалить</button>`
    : `<button class="button-primary button-round button-small" data-id="${post.id}" data-title="${post.title}">Coхранить</button>`

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