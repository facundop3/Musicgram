<template lang="pug">
  li
    h2: a(:href="artist.url" target="_blank") {{artist.name}}
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
  display: inline-block;
  margin: 10px;
li
  h2
    a
      display: block;
</style>
