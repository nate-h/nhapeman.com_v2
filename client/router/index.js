import Vue from 'vue';
import Router from 'vue-router';

// Components
import Home from '@/components/HomeContainer';
import Resume from '@/components/Resume';

Vue.use(Router);

const router = new Router({
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
    ],
    beforeEach: (to, from, next) => {
        next();
    }
});

export default router;
