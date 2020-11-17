// loading.js
import loadingComponent from './loading.vue'

let $vm

export default {
    install(Vue, options) {
        if (!$vm) {
            const loadingPlugin = Vue.extend(loadingComponent);

            $vm = new loadingPlugin({
                el: document.createElement('div')
            });

            document.body.appendChild($vm.$el);
        }

        $vm.show = false;

        let loading = {
            show({title}={title:'Loading...'}) {
                $vm.show = true;
                $vm.title = title;
            },
            hide() {
                $vm.show = false;
            }
        };

        if (!Vue.prototype.$loading) {
            Vue.prototype.$loading = loading;
        }

        Vue.mixin({
            created() {
                this.$loading = Vue.prototype.$loading;
            }
        })
    }
}