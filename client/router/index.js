import Vue from 'vue';
import Router from 'vue-router';

// Components
import Home from '@/components/HomeContainer';
import Resume from '@/components/Resume';

// Projects
import Projects from '@/components/Projects';
import Mario from '@/components/ProjectMario';

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
        },
        {
            path: '/projects',
            name: 'Projects',
            component: Projects,
            children: [
                {
                    path: '/projects/mario',
                    name: 'Mario',
                    component: Mario
                }
            ]
        }
    ],
    beforeEach: (to, from, next) => {
        next();
    }
});

export default router;
