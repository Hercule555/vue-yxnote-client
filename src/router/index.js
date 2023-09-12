import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Notebooks from '@/components/NotebookList.vue'
import Notedetail from '@/components/NoteDetail.vue'
import Trash from '@/components/TrashDetail.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/notebooks',
      component: Notebooks
    },
    {
      path: '/note/:noteId',
      component: Notedetail
    },
    {
      path: '/trash/:noteId',
      component: Trash
    }
  ]
})
