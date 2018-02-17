<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="(story, index) in stories" :key="index">
      {{ story.writer }} said "{{ story.plot }}"
      Story upvotes {{ story.upvotes }}
    </li>
  </ul>
</template>

<script>
import {store} from '../store.js'

export default {
  data: function () {
    return {
      stories: store.stories
    }
  }
}
</script>
