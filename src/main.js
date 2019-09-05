// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axioss from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import echarts from 'echarts';
Vue.prototype.echarts = echarts;

import  store from './../store/store'

Vue.prototype.axios = Axioss;

Vue.config.productionTip = false;

Vue.directive('codeStyle',{
  bind(el){
    el.style.color = '#' + Math.random().toString(16).slice(2,8)
  }
});

Vue.filter('capitalize', function (value) {
  return value[0].toUpperCase() + value.slice(1)
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
      if (to.path == '/login') {
        next()
      }else if (localStorage.getItem('user') === 'max'){
        next()
      } else {
       let msg =  confirm('请您先进行登录');
       if(msg){
         next('/login')
       }
      }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
