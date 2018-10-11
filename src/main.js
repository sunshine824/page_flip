import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$http = axios

const history = window.sessionStorage

router.beforeEach((to, from, next) => {
    console.log(to)
    console.log(from)
    next();
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')