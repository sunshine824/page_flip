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

router.beforeEach((to, from, next) => {
    const subArr = ['/', '/about', '/setting']
    let [toIndex, prevIndex] = [parseInt(history.getItem(to.path)), parseInt(history.getItem(from.path))]
    for (let index in subArr) history.setItem(subArr[index], 0)

    if (toIndex || toIndex === 0) {
        if (toIndex > prevIndex) {
            store.dispatch('set_direction_state', 'next')
        } else if (toIndex === prevIndex) {
            store.dispatch('set_direction_state', '')
        } else {
            store.dispatch('set_direction_state', 'prev')
        }
    } else if (!subArr.includes(to.path)) {
        ++count;
        history.setItem(to.path, count)
        store.dispatch('set_direction_state', 'next')
    }
    next();
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')