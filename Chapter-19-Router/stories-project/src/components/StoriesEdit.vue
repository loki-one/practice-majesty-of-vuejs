<template>
  <div class="row">
    <h3>Editing</h3>
    <form>
      <div class="form-group col-md-offset-2 col-md-8">
        <input class="form-control" v-model="story.plot">
      </div>
      <div class="form-group col-md-12">
        <button @click="saveChanges(story)" class="btn btn-success">
          Save Changes
        </button>
        <button @click="goBack" class="btn btn-success">
          Go Back
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import {store} from '../store.js'

export default {
  props: ['id'],
  data: function () {
    return {
      story: {}
    }
  },
  methods: {
    isTheOne: function (story) {
      return story.id === this.id
    },
    saveChanges: function (story) {

    },
    goBack: function () {
      this.$router.push('/stories')
    }
  },
  mounted: function () {
    this.story = store.stories.find(this.isTheOne)
  }
}

</script>
