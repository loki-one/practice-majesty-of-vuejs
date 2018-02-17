<template>
  <div id="app" class="container">
    <img src="./assets/logo.png">
    <!-- <component :is="currentComponent"></component>
    <p>
      This is very useful
    </p>
    <a href="#" @click="currentComponent = 'HelloWorld'">Show Hello</a>
    <a href="#" @click="currentComponent = 'greet'">Show Greet</a> -->
    <!-- <HelloWorld/> -->
    <!-- <login></login> -->
    <!-- <register></register> -->
    <!-- <stories></stories> -->
    <h1>Welcome to dynamic Components!</h1>
    <ul class="nav nav-tabs">
      <li :class="isActivePage(page) ? 'active' : ''" v-for="(page, index) in pages" :key="index">
        <a @click="setPage(page)"> {{ page | capitalize }}</a>
      </li>
    </ul>
    <component :is="activePage"></component>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import Greet from './components/Greet'
import Vue from 'vue'
import Login from './components/Login'
import Register from './components/Register'
import Stories from './components/Stories'

Vue.filter('capitalize', function (value) {
  return value.charAt(0).toUpperCase() + value.substr(1)
})

export default {
  name: 'App',
  components: {
    Login,
    Register,
    Stories
    // HelloWorld,
    // Greet
  },
  data: function () {
    return {
      pages: [
        'stories',
        'register',
        'login'
      ],
      activePage: 'stories'
    }
  },
  methods: {
    setPage: function (newPage) {
      this.activePage = newPage
    },
    isActivePage: function (page) {
      return this.activePage === page
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
