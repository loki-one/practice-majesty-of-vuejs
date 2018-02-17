<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="(story, index) in famous" :key="index">
      {{ story.writer }} said "{{ story.plot }}"
      Story upvotes {{ story.upvotes }}
    </li>
  </ul>
</template>
<script>
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
      stories: [
        {
          plot: 'My horse is amazing.',
          writer: 'Mr. Weebl',
          upvotes: 28,
          voted: false
        },
        {
          plot: 'Narwhals invented Shish Kebab.',
          writer: 'Mr. Weebl',
          upvotes: 8,
          voted: false
        },
        {
          plot: 'The dark side of the Force is stronger.',
          writer: 'Darth Vader',
          upvotes: 52,
          voted: false
        },
        {
          plot: 'One does not simply walk into Mordor',
          writer: 'Boromir',
          upvotes: 74,
          voted: false
        }
      ]
    }
  }
}
</script>
