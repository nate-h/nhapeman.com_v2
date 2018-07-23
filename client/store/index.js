import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        routes: {}
    },
    mutations: {
        setroutes (state) {
        }
    }
});

export default store;
