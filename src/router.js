import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Category from './components/Category/Categories.vue'
import Items from './components/Category/Items.vue'
import MyAccount from './components/Profile/MyAccount.vue'
import Login from './components/Profile/Login.vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import BootstrapVue from 'bootstrap-vue'


Vue.use(Router)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(BootstrapVue)
export default new Router({
  mode:'history',
   routes: [
     {
       path: '/',
       name: 'Home',
       component: Home
     },
     {
       path: '/About',
       name: 'About',
       component: About
     },
     {
       path: '/Categories',
       name: 'Categories',
       component: Category
     },
     {
       path: '/Items',
       name: 'Items',
       component: Items
     },
     {
       path: '/MyAccount',
       name: 'MyAccount',
       component: MyAccount
     },
     {
       path: '/Login',
       name: 'Login',
       component: Login
     }


  ]
})
