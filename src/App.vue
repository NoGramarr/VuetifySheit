<template>
  <v-app>
    <v-navigation-drawer
      v-model="sideNav"
      absolute
      temporary 
      class="secondary" 
      dark
    >
      <v-list>
        <v-list-tile v-for="item in menuItems" v-bind:key="item.title" v-bind:to="item.link" tag="span" dark>
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.title}}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="elevation-5 primary">
      <v-toolbar-side-icon @click="sideNav=!sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer;">DevMeetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn v-for="item in menuItems" v-bind:key="item.title" v-bind:to="item.link" flat>
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      sideNav: false
    }
  },
  computed: {
    menuItems(){
      let menuItems = [
        {icon: 'face', title: 'Sign Up', link: '/signup'},
        {icon: 'lock_open', title: 'Sign in', link: '/signin'}
      ];
      if(this.userIsAuthenticated){
        menuItems = [
          {icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
          {icon: 'room', title: 'Organize Meetup', link: '/meetup/new'},
          {icon: 'person', title: 'Profile', link: '/profile'}
        ]
      }
      return menuItems;
    },
    userIsAuthenticated(){
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined;
    }
  }
}
</script>
