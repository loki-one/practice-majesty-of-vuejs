<template>
  <div id="login">
    <h2>Sign in</h2>
    <input type="email" placeholder="Email address" class="form-control">
    <input type="password" placeholder="Password" class="form-control">
    <button class="btn btn-default">Sign in</button>
  </div>
</template>

<script>
export default {
  created () {
    console.log('login')
  }
}
</script>
