import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$http = axios

const history = window.sessionStorage
let count = history.getItem('count') || 0;
history.clear()
history.setItem('/', 0)

router.beforeEach((to, from, next) => {
    let toIndex = history.getItem(to.path)
    let prevIndex = history.getItem(from.path)

    if (toIndex) {

    } else {
        ++count;
        history.setItem(to.path, count)
    }
    next();
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')