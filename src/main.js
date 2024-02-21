import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createWebHashHistory, createRouter } from 'vue-router'
import HomeView from './pages/HomeView.vue';
import LoginView from './pages/LoginView.vue';
import ShopView from './pages/ShopView.vue';
import './style.css'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faRightToBracket, faShoppingBag} from '@fortawesome/free-solid-svg-icons'

/* import specific icons */

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    }, 
    {
        path: '/login',
        component:LoginView
    },
    {
        path: '/shop',
        component:ShopView
    }

]

/* add icons to the library */
library.add(faHome,faShoppingBag, faRightToBracket)

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

const app = createApp(App)
const pinia = createPinia()
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.use(router)
app.mount('#app')
