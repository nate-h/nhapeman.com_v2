import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        routes: {},
        links: {}
    },
    mutations: {
        setLinks (state, links) {
            state.links = links;
        }
    }
});

export default store;
