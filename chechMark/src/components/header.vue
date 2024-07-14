<template>
  <div id="header" class="bgw w-fill flex align-center gap-3 p-3 justify-end">
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
    showNavCol:{
      type: Boolean
    },
  }
}
</script>

<style scoped>
  #header{
    position: sticky;
    top: 0;
    border-bottom:1px solid var(--g);
    z-index: 2;
  }
  #header button{
    color: var(--g);
  }
</style>