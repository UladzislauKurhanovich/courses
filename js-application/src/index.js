import {HeaderComponent} from './components/header.components';
import {NavigationComponent} from './components/navigation.component';
import {CreateComponent} from './components/create.component';
import {PostsComponent} from './components/posts.component';
import {FavoriteComponent} from './components/favorite.component';
import {LoaderComponent} from './components/loader.component';
import './css/styles.css';

new HeaderComponent('header');
const navigation = new NavigationComponent('navigation');
const create = new CreateComponent('create');
const loader = new LoaderComponent('loader');
const posts = new PostsComponent('posts', {loader});
const favorite = new FavoriteComponent('favorite', {loader});


navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favorite}
])