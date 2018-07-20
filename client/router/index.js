import Vue from 'vue';
import Router from 'vue-router';

// Components
import Home from '@/components/HomeContainer';
import Resume from '@/components/Resume';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/resume',
            name: 'Resume',
            component: Resume
        },
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
});
