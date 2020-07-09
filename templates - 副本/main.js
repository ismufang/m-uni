import Vue from 'vue'
import App from './App'
import store form './state'

Vue.prototype.$store = state

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
