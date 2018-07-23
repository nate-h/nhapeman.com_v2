import Vue from 'vue';
import Router from 'vue-router';

// Components
import Home from '@/components/HomeContainer';
import Resume from '@/components/Resume';

Vue.use(Router);

let router;
export default router = new Router({
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

// router.beforeRouteUpdate((to, from, next) => {
//     // console.log('test');
//     console.log('from', from);
//     console.log('to', to);
//     next();
// });

router.beforeEach((to, from, next) => {
    next();
});
