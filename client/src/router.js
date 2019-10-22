import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Register from './views/Register'
import NotFound from './views/404'
import Login from './views/Login'
import Main from './views/Main.vue'

import CategoryList from './views/CategoryList.vue'
import CategoryCreate from './views/CategoryCreate.vue'

import EquipmentList from './views/EquipmentList.vue';
import EquipmentCreate from './views/EquipmentCreate.vue';

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
        {path: '/categories/create/:id',component:CategoryCreate,props:true},
        {path: '/categories/create',component: CategoryCreate},

        {path: '/equipments/list',component: EquipmentList},
        {path: '/equipments/create/:id',component:EquipmentCreate,props:true},
        {path: '/equipments/create',component: EquipmentCreate},
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
