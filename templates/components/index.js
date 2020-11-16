/**
 * plugins install
 * 插件注册
 */
import Loading from './public/loading'
import Mask from './public/mask'
import Toast from './public/loading'
import Modal from './public/modal'

const plugins = {
    Loading,
    Mask
}



function install(Vue){
    Vue.prototype.$toast = Toast;
    Vue.prototype.$modal = Modal;
    Object.keys(plugins).forEach(key => Vue.use(plugins[key]))
}

export default { install }