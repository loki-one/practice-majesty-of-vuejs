<template>
  <div class="greet">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      msg: 'No! I want to use the <component> element!'
    }
  }
}
</script>
