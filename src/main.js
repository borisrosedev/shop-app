import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuePlugin } from "harlem";
import { createWebHashHistory, createRouter } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import LoginPage from "./pages/LoginPage.vue";
import ProductsPage from "./pages/ProductsPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";
import DashboardPage from "./pages/DashboardPage.vue";
import UserProfile from "./pages/UserPages/UserProfile.vue";
import UserCart from "./pages/UserPages/UserCart.vue";
import UserProducts from "./pages/UserPages/UserProducts.vue";
import "./style.css";
import App from "./App.vue";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHome,
  faRightToBracket,
  faShoppingBag,
  faChevronUp,
  faChevronDown,
  faCircleCheck,
  faCircleXmark,
  faStore
  

} from "@fortawesome/free-solid-svg-icons";

/* import specific icons */

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/products",
    component: ProductsPage,
  },
  {
    path: "/dashboard/:id",
    component: DashboardPage,
    children: [
      {
        path: "profile",
        component: UserProfile,
      },
      {
        path: "cart",
        component: UserCart,
      },
      {
        path: "products",
        component: UserProducts,
      },
    ],
  },
  { path: "/:pathMatch(.*)*", component: NotFoundPage },
];

/* add icons to the library */
library.add(
  faHome,
  faShoppingBag,
  faRightToBracket,
  faChevronDown,
  faChevronUp,
  faCircleCheck,
  faCircleXmark,
  faStore
);

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

const app = createApp(App);
const pinia = createPinia();
const harlem = createVuePlugin();
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(pinia);
app.use(harlem);
app.use(router);
app.mount("#app");
