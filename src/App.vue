<template lang="pug">
html
  body
    #app(class="container-fluid")
      img(src="dist/logo.png")
      h1 Musicgram
      h2 Type you country and let us search most listened:  
        input(type="text" class="form-control country-input" placeholder="Uruguay" v-model="selectedCountry" @keyup.enter="getTopArtist(selectedCountry)")
        loadingComponent(v-show="loading")
      ul
        artist(v-for="artist in artists" :artist="artist" :key="artist.mbid" class="col-2")

</template>

<script>
import getTopArtist from './api'
import artist from './components/artist.vue'
import loadingComponent from './components/loading.vue'


export default {
  name: 'app',
  data () {
    return {
      artists: [],
      selectedCountry: 'Uruguay',
      loading: true,
    }
  },
  components:{
    artist,
    loadingComponent
  },
  mounted: function(){
    this.getArtist();
  },
  methods:{
  getArtist : function() {
  this.loading= true;
  this.artists=[];
    getTopArtist(this.selectedCountry)
        .then((artists)=> {
          this.artists = artists;
          this.loading = false; })
    }
  },
  watch: {
    selectedCountry: function (){
      this.getArtist()
    }
  }
}
</script>

<style lang="stylus" >
#app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px

h1, h2
    font-weight normal

ul
    list-style-type none
    padding 0

li
    display inline-block
    margin 0 10px

a
    color #42b983
.country-input{
  display: inline-block;
  width: auto;
}
</style>
