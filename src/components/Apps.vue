<template>
  <div class="b-row">
     <nav class="navbar navbar-expand-lg navbar-light bg-light">

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Apps <span class="sr-only">(current)</span></a>
      </li>
      
    </ul>
    <span class=" my-2 my-lg-0">
        <font-awesome-icon class="sideicon" v-if="!showUser" v-on:click="onexpandButton" :icon="['fas', 'expand-arrows-alt']" />
        <font-awesome-icon class="sideicon" v-if="showUser" v-on:click="onexpandButton" :icon="['fas', 'compress-arrows-alt']" />
        <font-awesome-icon v-on:click="onClickButton" class="sideicon" :icon="['fas', 'window-close']" />
      
    </span>
  </div>
</nav>
         
  </div>
</template>

<script>
export default {
  name: 'Apps',
  data(){
    return {
      showUser: false
    }
  },
   methods: {
     onexpandButton(){
       this.showUser = !this.showUser
       this.$emit("clickedExpand",{expand: !this.showUser})
     },
    onClickButton () {
      this.$emit('clicked', {"closed":true})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.b-row{
  margin: 0;
  padding: 0;
}
.sideicon{
  margin-left: 10px;
}
.float-child{
  float: right;
}
.appscard{
  height: 100%;
  
}
</style>
