import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'

import firebase from 'firebase/app'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,

  },

  {
    path: '/studio',
    name: 'Studio',
    component: () => import(/* webpackChunkName: "about" */ '../components/Studio.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    redirect: '/dashboard/home',
    meta: {
      authRequired: true,
    },

    children:[
      {
        path:'/dashboard/home',
        component:() => import(/*webpack chunk name: dashhome */ '../components/HomeD')
      },
      {
        path:'/dashboard/templates',
        component:() => import(/*webpack chunk name: dashhome */ '../components/DTemps')
      },
      {
        path:'/dashboard/issues',
        component:() => import(/*webpack chunk name: dashhome */ '../components/IssuesD')
      },
      {
        path:'/dashboard/settings',
        component:() => import(/*webpack chunk name: dashhome */ '../components/SettingsD')
      },
      {
        path:'/dashboard/clientlist',
        component:() => import(/*webpack chunk name: dashmenu*/ '../components/ClientList'),
        // 
        children:[
          {
            path:'clientlist/editclient',
            component:() => import(/*webpack chunk name: dashmenu*/ '../components/EditClient'),
          }

        ],
      },
    ]
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  
  if (to.matched.some(record => record.meta.authRequired)) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
          
          next()
      } else {
        alert('You must be logged in to see this page');
        next({
          path: '/',
        });

      }
  });
    
  } else{
    next()
  }
});
export default router
