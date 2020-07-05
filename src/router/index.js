import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePageTab from '../views/BookStore/HomePageTab.vue'
import Order from '../views/BookStore/OrderPage.vue'
import FavoritePage from '../views/BookStore/FavoritePage.vue'
import Account from '../views/BookStore/AccountPagae.vue'
import Buy from '../views/BookStore/BuyBook.vue'
import Sell from '../views/BookStore/SellBook.vue'
import Store from '../views/BookStore/HomePageCom/ViewStore.vue'
import Publish from '../views/BookStore/HomePageCom/MyPublish.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePageTab',
    component: HomePageTab
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/buy',
    name: 'Buy',
    component: Buy
  },
  {
    path: '/viewStore',
    name: 'Store',
    component: Store
  },
  {
    path: '/myPublish',
    name: 'Publish',
    component: Publish
  },
  {
    path: '/sell',
    name: 'Sell',
    component: Sell
  },
  {
    path: '/favorite',
    name: 'FavoritePage',
    component: FavoritePage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
