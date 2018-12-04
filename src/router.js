import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Meetups from './components/Meetup/Meetups.vue'
import CreateMeetup from './components/Meetup/CreateMeetup.vue'
import Profile from './components/User/Profile.vue'
import SignIn from './components/User/SignIn.vue'
import SignUp from './components/User/SignUp.vue'
import Meetup from './components/Meetup/Meetup.vue'
import AuthGuard from './auth-guard.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: CreateMeetup,
      beforeEnter: AuthGuard
    },
    {
      path: '/meetups/:id',
      name: 'Meetup',
      component: Meetup,
      props: true
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    }
  ],
  mode: 'history'
})
