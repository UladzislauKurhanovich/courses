import { Component } from "../core/component";
import { apiService } from '../services/api.service'
import { TransformService } from '../services/transform.service'
import { renderPost } from "../templates/post.template";

export class PostsComponent extends Component {
    constructor(id, {loader}) {
        super(id);
        this.loader = loader;
    }

    init() {
        this.$el.addEventListener('click', buttonHandler.bind(this));
    }
    
    async onShow() {
        this.loader.show();
        const fbData = await apiService.fetchPost();
        const posts = TransformService.fbObjectToArray(fbData);
        const html = posts.map(post => renderPost(post, {withButton : true}));
        this.loader.hide();
        this.$el.insertAdjacentHTML('afterbegin', html.join(' '));
    }

    onHide(){
        this.$el.innerHTML = ` `;
    }

}

function buttonHandler(event) {
    const $el = event.target;
    const id = $el.dataset.id;
    const title = $el.dataset.title;

    if (id) {

        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const condidate = favorites.find(p => p.id === id)
        
        if(condidate) {
            favorites = favorites.filter(p => p.id !== id);
            $el.textContent = 'Сохранить';
            $el.classList.add('button-primary');
            $el.classList.remove('button-danger');
        } else {
           favorites.push({id, title});
           $el.textContent = 'Удалить';
           $el.classList.remove('button-primary');
           $el.classList.add('button-danger');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}