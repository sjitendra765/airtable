<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar">
  
    <span class="form-inline my-2 my-lg-0">
       HELP<font-awesome-icon class="sideicon" :icon="['fas', 'question-circle']" />
      <font-awesome-icon class="sideicon" :icon="['fas', 'bell']" />
      <font-awesome-icon class="sideicon" :icon="['fas', 'user']" />
    </span>

</nav>
     
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-light {
  background: blue !important;
  color: white;
}
.hello{
  float: right;
  margin-bottom:10px;
  height: 50px !important;
  background: blue;
}
.sideicon{
  margin-left: 10px;
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
