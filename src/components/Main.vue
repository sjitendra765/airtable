<template>
  <div class="b-row">
     <nav class="navbar navbar-expand-lg navbar-light bg-light">

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Users <span class="sr-only">(current)</span></a>
      </li>
      
    </ul>
    <span class=" my-2 my-lg-0">
       
      <font-awesome-icon v-if="!showApp" v-on:click="onAppsClicked" class="sideicon" :icon="['fas', 'expand-arrows-alt']" />
      <font-awesome-icon v-if="showApp" v-on:click="onAppsClicked" class="sideicon" :icon="['fas', 'compress-arrows-alt']" />
      <span v-if="showApp" v-on:click="onAppsClicked">Apps</span>       
    </span>
  </div>
</nav>
         
  </div>
</template>

<script>
export default {
  name: 'Main',
  props:{
    seen: Boolean
  },
  watch:{
    seen(val){
      this.showApp = !val
    }
  },
  data(){
    return{
      showApp: !this.seen
    }
  },
  methods: {
    onAppsClicked () {
      console.log(!this.seen)
      this.showApp = !this.showApp
      this.$emit('clicked', {"seen": !this.seen})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.b-row{
  height: 100%;
}
.sideicon{
  margin-right: 10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
