<template>
  <div id="app" class="container">
    <img src="./assets/logo.png">
    <h1>Welcome to Routing!</h1>
    <router-link :to="{ name: 'home'}" exact>Home</router-link>
    <router-link :to="{ name: 'login'}">Login</router-link>
    <router-link :to="{ name: 'stories.all'}">Stories</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
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

.router-link-active {
  color: green;
}
</style>
