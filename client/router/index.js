import Vue from 'vue';
import Router from 'vue-router';

// Components
import Home from '@/components/HomeContainer';
import Resume from '@/components/Resume';
import Interests from '@/components/Interests';

// Projects
import Projects from '@/components/Projects';
import ProjectMario from '@/components/ProjectMario';
import ProjectMyTunes from '@/components/ProjectMyTunes';
import ProjectPacman from '@/components/ProjectPacman';
import ProjectMineSweeper from '@/components/ProjectMineSweeper';
import ProjectPixelChaser from '@/components/ProjectPixelChaser';
import ProjectRiemannZeta from '@/components/ProjectRiemannZeta';

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
                    name: 'Mario',
                    component: ProjectMario
                },
                {
                    path: 'mytunes',
                    name: 'MyTunes',
                    component: ProjectMyTunes
                },
                {
                    path: 'pacman',
                    name: 'Pacman',
                    component: ProjectPacman
                },
                {
                    path: 'minesweeper',
                    name: 'Mine Sweeper',
                    component: ProjectMineSweeper
                },
                {
                    path: 'pixelchaser',
                    name: 'Pixel Chaser',
                    component: ProjectPixelChaser
                },
                {
                    path: 'riemannzeta',
                    name: 'Riemann Zeta',
                    component: ProjectRiemannZeta
                }
            ]
        },
        {
            path: '/interests',
            name: 'Interests',
            component: Interests
        }
    ],
    beforeEach: (to, from, next) => {
        next();
    }
});

export default router;
