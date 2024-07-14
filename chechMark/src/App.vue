<template>
  <v-app>
    <vh
      v-if="showHeader"
      :showNavCol="showNavCol"
      :style="{width: mainInWidth + '%'}"
      @showNavChangeState="this.showNavCol= !this.showNavCol"
      @mainInWidthChange="(size) => mainInWidth = size"
    ></vh>
    <router-view 
      :style="{width: mainInWidth + '%'}"
      :loggedIn="loggedInState"
      @lgstate="loggedInState = true; showNavCol = true; showHeader = true; mainInWidth = 80" 
    ></router-view>
    <div id="nav" class="p-3 flex flex-col items-center" v-show="showNavCol">
      <vn :loggedIn="loggedInState"></vn>
    </div>
  </v-app>
</template>

<script>
import header from './components/header.vue'
import nav from './components/nav.vue'
export default {
  components:{
    'vh':header,
    'vn':nav
  },
  data(){
    return{
      loggedInState: false,
      showNavCol: false,
      mainInWidth: 100,
      showHeader: false,
    }
  },
}
</script>