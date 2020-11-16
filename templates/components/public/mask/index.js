// loading.js
import maskComponent from './mask.vue'

let $vm

export default {
    install(Vue, options) {
        if (!$vm) {
            const MaskPlugin = Vue.extend(maskComponent);

            $vm = new MaskPlugin({
                el: document.createElement('div')
            });

            document.body.appendChild($vm.$el);
        }

        $vm.isShow = false;

        let mask = {
            show(text) {
                $vm.isShow = true;

                // $vm.text = text;
            },
            hide() {
                // console.log('mask隐藏');
                // console.log($vm);
                $vm.isShow = false;
                // console.log($vm.isShow);
            }
        };

        if (!Vue.prototype.$mask) {
            Vue.prototype.$mask = mask;
        }

        Vue.mixin({
            created() {
                this.$mask = Vue.prototype.$mask;
            }
        })
    }
}