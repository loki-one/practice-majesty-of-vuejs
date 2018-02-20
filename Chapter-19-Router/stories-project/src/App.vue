<template>
  <div id="app" class="container">
    <img src="./assets/logo.png">
    <h1>Welcome to Routing!</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Login from './components/Login'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Login
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
