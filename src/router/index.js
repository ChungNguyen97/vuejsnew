import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/PageCommon/HomePage'
import AboutPage from '@/components/PageCommon/AboutPage'
import RegisterUser from '../components/User/Register/RegisterUser.vue'
import LoginUser from '../components/User/Login/LoginUser'
import TaskList from '../components/Task/TaskList'
import ProductList from '../components/Product/ProductList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage,
      
    },
    {
      path: '/register',
      name: 'RegisterUser',
      component: RegisterUser
    },
    {
      path: '/login',
      name: 'LoginUser',
      component: LoginUser
    },
    {
      path: '/task',
      name: 'TaskList',
      component: TaskList
    },
    {
      path: '/product',
      name: 'ProductList',
      component: ProductList
    }
  ]
})
