import Vue from 'vue';
import Router from 'vue-router';

// Components
import Home from '@/components/HomeContainer';
import Resume from '@/components/Resume';

// Projects
import Projects from '@/components/Projects';
import ProjectMario from '@/components/ProjectMario';
import ProjectPacman from '@/components/ProjectPacman';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/resume',
            name: 'Resume',
            component: Resume
        },
        {
            path: '/projects',
            name: 'Projects',
            component: Projects,
            children: [
                {
                    path: 'mario',
                    name: 'Mario Clone',
                    component: ProjectMario
                },
                {
                    path: 'pacman',
                    name: 'Pacman Clone',
                    component: ProjectPacman
                }
            ]
        }
    ],
    beforeEach: (to, from, next) => {
        next();
    }
});

export default router;
