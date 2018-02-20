<template>
  <div class="">
    <h3>All Stories {{ stories.length }}</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="(story, index) in stories" :key="index">
        <div class="row">
          <h4> {{ story.writer }} said "{{ story.plot }}"
          <span class="badge"> {{ story.upvotes }} </span>
          </h4>
          <router-link :to="{ name: 'stories.edit', params: {id: story.id} }" tag="button" class="btn btn-default" exact>
            Edit
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {store} from '../store.js'

export default {
  data: function () {
    return {
      stories: store.stories
    }
  },
  mounted: function () {
    console.log('stories')
  }
}
</script>
