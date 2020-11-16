import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        version: "0.0.1", // 版本  
        versionCode: "100", // build
        controller: "v1", // api版本控制器
        url: '', // api地址 
    },

    mutations: {
        setStateFn(state, provider) {
            state[provider.key] = provider.value;
        }
    },
    actions: {},
    modules: {}

});

export default store