import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import Customers from '@/components/Customers'
import About from '@/components/About'
import Add from '@/components/Add'
import Details from '@/components/Details'
import Edit from '@/components/Edit'


Vue.use(Router)
Vue.use(vueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/item/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
    }
  ]
})
