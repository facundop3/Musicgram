<template lang="pug">
  li
    div(class="artist-box")
      h2: a(:href="artist.url" target="_blank" class="band-name") {{artist.name}}
      img(:src="artist.image[2]['#text']")
</template>

<script>
export default {
  name: 'artist',
  props: ['artist'] //What we recibe in the v-bind of the app.vue component
}
</script>

// scoped -> applyes the css only to this component
<style lang="stylus" scoped>
li
  display: inline-block
  margin: 10px
.band-name
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  text-decoration: none;
.artist-box
  background-color: red
  position: relative
  text-align: center
</style>
