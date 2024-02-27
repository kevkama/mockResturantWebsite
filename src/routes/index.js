import { createRouter, createWebHistory } from "vue-router";

import HomePage from './../components/HomePage.vue'
import AboutUs from './../components/AboutUs.vue'
import ContactUs from './../components/ContactUs.vue'
import Menu from './../components/Menu.vue'

const routes = [
    {
        path:'/',
        name:'homepage',
        component: HomePage,
    },

    {
        path:'/aboutus',
        name: 'aboutus',
        component: AboutUs,
    },

    {
        path:'/contactus',
        name:'contactus',
        component: ContactUs,
    },

    {
        path:'/menu',
        name:'menu',
        component: Menu,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
 })
 export default router