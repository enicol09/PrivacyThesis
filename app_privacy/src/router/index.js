import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage'
import AboutPage from '@/components/AboutPage.vue'
import firebase from "firebase/app";
import TutorialView from '../views/TutorialView.vue'
import ContactView from '../views/ContactView.vue'
import TemplateCreation from '../views/TemplateCreation.vue'
import ForgotPassword from "@/components/ForgotPassword";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

  },

  {
    path: '/template',
    name: 'template',
    component: TemplateCreation
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

  },

  {
    path: '/tutorial',
    name: 'tutorial',
    component: TutorialView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route

  },

  {
    path: '/privacy',
    name: 'privacy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PolicyView.vue')
  },

  {
    path: '/signIn',
    name: 'signin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignInView.vue')
  }
  ,

  {
    path: '/signUp',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUpView.vue')
  },

  {
    path: '/menu',
    name: 'menu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MenuView.vue')
  },

  {
    path: '/generator',
    name: 'generator',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GeneratorView.vue')
  },

  {
    path: '/edit',
    name: 'edit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EditPolicy.vue')
  },

  {
    path: '/policyr',
    name: 'policyr',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PolicyNow.vue')
  },


  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: ForgotPassword,
    beforeEnter(to, from, next) {
      const user = firebase.auth().currentUser;
      if (user) {
        next({ name: "dashboard" });
      } else {
        next();
      }
    },
  },

  { path: "@", redirect: '/' } //otherwise redirect to home 
]

const router = new VueRouter({
  routes
})


export default router

// router.beforeEnter((to, from, next) => {
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  // if (requiresAuth && !currentUser) {
  //     const loginpath = window.location.pathname;
  //     next({ name: 'main', query: { from: loginpath } });
  // } else if (!requiresAuth && currentUser) next('menu');

