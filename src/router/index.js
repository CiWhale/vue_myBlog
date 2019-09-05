import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('@/components/Home');
const List = () => import('@/components/List');
const Shopping = () => import('@/components/Shopping');
const Single = () => import('@/components/Single');
const Login = () => import('@/components/Login');

const Datile = () => import('@/components/Datile');
const DatileAction = () => import('@/components/datile/DatileAction');
const DatileKind = () => import('@/components/datile/DatileKind');
const DatileMain = () => import('@/components/datile/DatileMain');
const DatileTolo = () => import('@/components/datile/DatileTolo');

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/datile',
      name: 'Datile',
      component: Datile,
      children:[
        {path: '/datile', component: DatileAction},
        {path: '/datileaction', component: DatileAction},
        {path: '/datilekind', component: DatileKind},
        {path: '/datilemain', component: DatileMain},
        {path: '/datiletolo', component: DatileTolo},
      ]
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/shop',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/single/:id',
      name: 'Single',
      component: Single
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },


  ]
})
