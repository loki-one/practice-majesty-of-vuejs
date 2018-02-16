<template>
  <div id="app" class="container">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <!-- <login></login> -->
    <register></register>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import Login from './components/Login'
import Register from './components/Register'

export default {
  name: 'App',
  components: {
    // Login,
    Register
  // HelloWorld
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
