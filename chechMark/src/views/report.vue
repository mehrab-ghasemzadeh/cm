<template>
  <!-- <vh
    :showNavCol="showNavCol"
    :mainInWidth="mainInWidth"
    @showNavChangeState="showNavCol= !showNavCol; console.log(showNavCol)"
    @mainInWidthChange="(size) => mainInWidth = size"
  ></vh> -->
  <div id="container" class="w-full">
    <h1>fucck</h1>
  </div>
  <!-- <div id="nav" class="p-3 flex flex-col items-center" v-show="showNavCol">
    <vn :loggedIn="loggedIn"></vn>
  </div> -->
</template>

<script>
export default {
  props:{
    loggedIn:{
      type: Boolean
    }
  },
  data(){
    return{
    }
  },
}
</script>

<style scoped>

</style>