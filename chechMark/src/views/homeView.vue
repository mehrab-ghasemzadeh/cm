<template>
  <div id="main flex" v-if="dashboard">
    <keep-alive>
      <div>
        
        <div class="mainIn w-full">
          <div class="flex justify-center flex-wrap p-5 gap-5">
            <div class="grid mainInContainer">
              <v-card
                class="mx-auto card"
                v-for="(txt,i) in cards" :key="i"
              >
                <template v-slot:title>
                  <span class="font-weight-black">{{ txt }}</span>
                </template>
                <v-card-text class="bg-surface-light pt-4">
                  {{ i }} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda enim voluptas labore nemo ipsum dignissimos aliquid consectetur alias iure debitis molestias pariatur necessitatibus error, voluptatem facere exercitationem aperiam impedit ut.
                </v-card-text>
              </v-card>
            </div>
          </div>
        </div>
        
      </div>
    </keep-alive>
  </div>
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
      comp:0,
      dashboard: true,
      page: 0,
      pages:[
        {name: 'shit', pageNum: 0},
        {name: 'crap', pageNum: 1}
      ],
      cards:['namaye negahban','chart','send request','employee list','log','profile'],
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
  #main{
    min-height: 100vh;
  }
  .card{
    border: 1px solid var(--b);
    min-width: 300px;
    z-index: 1 !important;
  }
  .mainInContainer{
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
  @media screen and (max-width: 1200px) {
    .mainInContainer{
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
  @media screen and (max-width: 800px) {
    .mainInContainer{
      grid-template-columns: repeat(1, 1fr) !important;
    }
  }
</style>