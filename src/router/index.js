import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotePage from '@/components/NotePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:note_id',
      name: 'note',
      component: NotePage
    },
    {
      path: '/new_note',
      name: 'new_note',
      component: NotePage
    },
  ]
})
