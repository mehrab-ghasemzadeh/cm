<template>
  <vh
    :showNavCol="showNavCol"
    :mainInWidth="mainInWidth"
    @showNavChangeState="showNavCol= !showNavCol; console.log(showNavCol)"
    @mainInWidthChange="(size) => mainInWidth = size"
  ></vh>
  <div id="container" class="w-full">
    <h1>fucck</h1>
  </div>
  <div id="nav" class="p-3 flex flex-col items-center" v-show="showNavCol">
    <vn :loggedIn="loggedIn"></vn>
  </div>
</template>

<script>
import nav from '../components/nav.vue'
import header from '../components/header.vue'
export default {
  components:{
    'vn':nav,
    'vh':header
  },
  props:{
    loggedIn:{
      type: Boolean
    }
  },
  data(){
    return{
      mainInWidth:80,
      showNavCol: true,
    }
  },
  created(){
    if(!this.loggedIn){
      // window.location.href = window.location.href + 'login';
      window.location.href = 'http://localhost:3000/#/login'
      console.log('not logged in')
    }
  },
}
</script>

<style scoped>

</style>