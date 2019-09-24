import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Register from './views/Register'
import NotFound from './views/404'
import Login from './views/Login'
import Main from './views/Main'

import CategoryList from './views/CategoryList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'longin',
      component: Login
    },
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {path: '/categories/list',component: CategoryList},

      ]
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    },
  ]
})
