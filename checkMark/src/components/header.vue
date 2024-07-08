<template>
  <div id="header" class="bgw w-fill flex align-center gap-3 p-3 justify-end" :style="{width: mainInWidth + '%'}">
    <router-link to="/login" class="loginButton" v-if="!loggedIn">login</router-link>
    <button class="ms-5"  v-show="!showNavCol" @click="this.$emit('showNavChangeState'); this.$emit('mainInWidthChange',80)">
      <span class="material-symbols-outlined">
        list
      </span>
    </button>
    <button class="ms-5" @click="this.$emit('showNavChangeState'); this.$emit('mainInWidthChange',100)" v-show="showNavCol">
      <span class="material-symbols-outlined">
        close
      </span>
    </button>
  </div>
</template>

<script>
export default {
  props:{
    loggedIn:{
      type: Boolean
    },
    showNavCol:{
      type: Boolean
    },
    mainInWidth:{
      type: Int16Array
    }
  }
}
</script>

<style scoped>
  #header button{
    color: var(--g);
  }
</style>