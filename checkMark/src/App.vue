<template>
  <div id="app">
    <router-view :loggedIn='loggedInState' @lgstate='loggedInState = true'></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      loggedInState: false,
    }
  },
  methods:{

  }
}
</script>