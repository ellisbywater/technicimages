<template>
  <div>
    <h3>Images</h3>
    <div class="columns is-multiline">
      <div v-for="image in getImageList" :key="image.id" class="column is-one-third">
        <image-card :imageUrl="image.url" :author="image.author"></image-card>
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
    ...mapActions(['fetchImageList'])
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
