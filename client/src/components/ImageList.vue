<template>
  <div>
    <div class="hero">
        <h1 class="hero-body is-size-1">Technic Images</h1>
    </div>
    <div class="columns is-multiline">
      <div v-for="image in getImageList" :key="image.id" class="column is-one-third">
        <image-card :id="image.id" :imageUrl="image.gridSize" :author="image.name"></image-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ImageCard from './ImageCard'
export default {
  name: 'ImageList',
  props: {
    searchName: {
      type: String,
      default: ''
    }
  },
  components: {
    ImageCard
  },
  methods: {
    ...mapActions(['fetchImageList', 'getImageList'])
  },
  computed: mapGetters(['getImageList']),
  created() {
    this.fetchImageList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
