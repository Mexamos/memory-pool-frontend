import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Note from '@/components/Note'

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
      component: Note
    },
  ]
})
