<template>
  <v-app>
    <router-view 
      :loggedIn="loggedInState"
      @lgstate="loggedInState = true" 
      ></router-view>
      <!-- 
          :showNavCol="showNavCol"
          :mainInWidth="mainInWidth"
        -->
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      loggedInState: false,
      // showNavCol:true,
      // mainInWidth:80,
    }
  }
}
</script>