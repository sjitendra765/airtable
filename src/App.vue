<template>
  <div id="app">
    <div class="b-row header">
     
      <Header></Header>
    </div>
    <div class = "float-container b-row">
      <Main class="float-child main-content" v-if="expand" :style="myStyles" :seen="seen" @clicked="onAppsClicked"></Main>
      <vue-resizable v-if="seen" class="float-child resizable-content" :active="handlers"
      :fit-parent="fit"
       :width="width"
       @mount="eHandler"
        @resize:move="eHandler"
        @resize:start="eHandler"
        @resize:end="eHandler"
        @drag:move="eHandler"
        @drag:start="eHandler"
        @drag:end="eHandler">
        <Apps @clicked="onClickChild" :style="expandStyle"  @clickedExpand="onExpandApps"></Apps>
    </vue-resizable>
    </div>
  </div>
</template>

<script>
import Main from './components/Main.vue'
import Header from './components/Header.vue'
import Apps from './components/Apps.vue'
import VueResizable from 'vue-resizable'
export default {
  name: 'App',
  components: {
    Main,
    Header,
    Apps,
    VueResizable
  },
  data(){
    return {
      handlers:["l"],
      fit: true,
      width: `50%`,
      wdt:40,
      seen: true,
      expand: true
    }
  },computed: {
    myStyles () {
      return {
        width: `${this.wdt}% !important`
      }
    },
    expandStyle(){
       return {
        width: `${this.widA}% !important`
      }
    }
  },
        methods: {
    eHandler(data) {
      if(data.width < 764 ){
        this.wdt = this.wdt+0.5;
      }
      else{
        this.wdt = this.wdt -0.5
      }
    },
    onExpandApps(value){
      if(value.expand){
        this.widA = 100;
        this.expand = true
      }else{
        this.widA = 50;
        this.expand = false
      }
    },
    onClickChild (value) {
      if(value.closed){
        this.wdt = 100;
        this.seen = false
      }
    },
    onAppsClicked (value) {
      if(value.seen){
        this.wdt = 40;
        this.seen = true
      }else{
        this.wdt = 100;
        this.seen  = false
      }
    }
        }
}
</script>

<style>
:root{
  background: blue;
}
.header{
  height: 50px;
  background: blue;
}
.float-container {
   margin-top: 5px;
   background: blue;
}

.float-child {
    width: 40%;
    float: left;
    padding: 2px;
    border: 2px solid blue;
}  
.float-child:first-child {
    margin-right: 20px;
} 
.resizable-content {
        background-color: aqua;
    }
.main-content {
  background-color: blue !important;
}

</style>
