import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#009688',
    secondary: '#80CBC4',
    accent: '#004D40',
    error: '#827717',
    info: '#1DE9B6',
    success: '#81C784',
    warning: '#EEFF41'
  },
  customProperties: true,
  iconfont: 'md',
})
