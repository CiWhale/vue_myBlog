/**
 * Created by aa on 2019/8/2.
 */
import Vue from 'vue';
import Vuex from  'vuex';

Vue.use(Vuex);

const  store = new Vuex.Store({
  state:{
    storeList:[]
  },
  mutations:{
    initList:function (state,data) {
   localStorage.setItem('list',JSON.stringify(data));
      state.storeList = JSON.parse( localStorage.getItem('list'));
    }
  }
});

export default  store;
