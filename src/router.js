import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Page01 from '@/views/Page01'
import Page02 from '@/views/Page02'
import About from '@/views/About'
import Setting from '@/views/Setting'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/page01',
            name: 'page01',
            component: Page01
        },
        {
            path: '/page02',
            name: 'page02',
            component: Page02
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/setting',
            name: 'setting',
            component: Setting
        }
    ]
})