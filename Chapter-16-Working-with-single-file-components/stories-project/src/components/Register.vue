<template>
  <div id="register">
    <h2>Register Form</h2>
    <input placeholder="First Name" class="form-control">
    <input placeholder="Last Name" class="form-control">
    <input placeholder="Email Address" type="email" class="form-control">
    <input placeholder="Pick a password" class="form-control">
    <input placeholder="Confirm password" class="form-control">
    <button class="btn btn-primary">Sign up</button>
  </div>
</template>

<script>
export default {
  created () {
    console.log('register')
  }
}
</script>
