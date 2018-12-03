import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/alert.vue'

Vue.config.productionTip = false
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyCP4wc1jbfD9O17DmTKxE9DODeoMwsH6Rs",
      authDomain: "cevameetupfrumos.firebaseapp.com",
      databaseURL: "https://cevameetupfrumos.firebaseio.com",
      projectId: "cevameetupfrumos",
      storageBucket: "cevameetupfrumos.appspot.com"
    });
  }
}).$mount('#app')
