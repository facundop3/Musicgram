<template lang="pug">
  li
    div(class="artist-box")
      img(:src="artist.image[2]['#text']")
      h2: a(:href="artist.url" target="_blank" class="band-name") {{artist.name}}
</template>

<script>
export default {
  name: 'artist',
  props: ['artist'], //What we recibe in the v-bind of the app.vue component
}
</script>

// scoped -> applyes the css only to this component
<style lang="stylus" scoped>
li
  display: inline-flex;
  margin: 10px
.artist-box
  width: 80%;
  height: 250px;
  margin: auto;
</style>
