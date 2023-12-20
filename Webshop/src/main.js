
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Homepage from "@/Vues/pages/homepage.vue";
import * as VueRouter from 'vue-router'
import Shoppage from "@/Vues/pages/shoppage.vue";
import contactpage from "@/Vues/pages/contactpage.vue";
import loginpage from "@/Vues/pages/loginpage.vue";
import shoppingcartpage from "@/Vues/pages/shoppingcartpage.vue";
import productpage from "@/Vues/pages/productpage.vue"
import {createPinia} from "pinia";

const routes = [
    { path: '/', component: Homepage },
    { path: '/shop', component: Shoppage },
    { path: '/contact', component: contactpage },
    { path: '/login', component: loginpage },
    { path: '/shoppingcart', component: shoppingcartpage },
    { path: '/product/:productId', component: productpage }
]

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount('#app');