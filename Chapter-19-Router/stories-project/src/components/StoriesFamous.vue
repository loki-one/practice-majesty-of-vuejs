<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="(story, index) in famous" :key="index">
      {{ story.writer }} said "{{ story.plot }}"
      Story upvotes {{ story.upvotes }}
    </li>
  </ul>
</template>
<script>
import {store} from '../store.js'

export default {
  computed: {
    famous: function () {
      var famousStories = this.stories.filter(function (story) {
        return story.upvotes > 50
      })
      return famousStories
    }
  },
  data: function () {
    return {
      stories: store.stories
    }
  }
}
</script>
