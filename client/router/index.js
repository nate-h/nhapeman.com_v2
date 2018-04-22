import Vue from 'vue'
import Router from 'vue-router'

// Components
import Home from '@/components/Home'
import Resume from '@/components/Resume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Home
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    }
  ]
})
