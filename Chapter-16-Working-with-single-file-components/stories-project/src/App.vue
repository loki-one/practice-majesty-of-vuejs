<template>
  <div id="app" class="container">
    <img src="./assets/logo.png">
    <component :is="currentComponent"></component>
    <p>
      This is very useful
    </p>
    <a href="#" @click="currentComponent = 'HelloWorld'">Show Hello</a>
    <a href="#" @click="currentComponent = 'greet'">Show Greet</a>
    <!-- <HelloWorld/> -->
    <!-- <login></login> -->
    <!-- <register></register> -->
    <!-- <stories></stories> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Greet from './components/Greet'
// import Login from './components/Login'
// import Register from './components/Register'
// import Stories from './components/Stories'

export default {
  name: 'App',
  components: {
    // Login,
    // Register
    // Stories
    HelloWorld,
    Greet
  },
  data: function () {
    return {
      currentComponent: 'HelloWorld'
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
