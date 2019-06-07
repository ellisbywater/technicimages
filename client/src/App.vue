<template>
  <div id="app">
    <div class="container">
      <image-list/>
    </div>
  </div>
</template>

<script>
import ImageList from './components/ImageList.vue'

export default {
  name: 'app',
  components: {
    ImageList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
