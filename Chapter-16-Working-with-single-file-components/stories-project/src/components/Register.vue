<template>
  <div id="register">
    <h2>Register Form</h2>
    <input placeholder="First Name" class="form-control">
    <input placeholder="Last Name" class="form-control">
    <input placeholder="Email Address" type="email" class="form-control">
    <input placeholder="Pick a password" class="form-control">
    <input placeholder="Confirm password" class="form-control">
    <button class="btn btn-primary">Sign up</button>
    <famous></famous>
  </div>
</template>

<script>
import Famous from './Famous.vue'

export default {
  components: {
    Famous
  },
  created () {
    console.log('register')
  }
}
</script>
