
// #ifdef H5
import '@/config/h5/pc.js' // 必须第一个引入
// #endif
import Vue from 'vue'
import App from './App'
import store from './store'
import ajax from './service/request'
import plugins from './components/index'

Vue.use(plugins)

Vue.config.productionTip = false
App.mpType = 'app'
console.log(process.env.NODE_ENV)

Vue.prototype.$ajax = ajax

const app = new Vue({
	store,
    ...App
})
app.$mount()
