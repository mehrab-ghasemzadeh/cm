<template>
  <div id="main flex" v-if="dashboard">
    <keep-alive>
      <div>
        <vh 
        :loggedIn="loggedIn" 
        :showNavCol="showNavCol" 
        :mainInWidth="mainInWidth"
        @showNavChangeState="this.showNavCol= !this.showNavCol"
        @mainInWidthChange="(size) => mainInWidth = size">
        </vh>
        <div class="mainIn" :style="{width: mainInWidth + '%'}">
          <div class="flex justify-center flex-wrap p-5 gap-5">
            <div class="grid mainInContainer">
              <div class="card grow bgw" v-for="(a,i) in arr" :key="i">
                <span>{{a}}</span>
                <br>
                <button class="border p-2" @click="pageChange(i)">{{i}}</button>
              </div>
            </div>
          </div>
        </div>
        <div id="nav" class="p-3 flex flex-col items-center" v-show="showNavCol">
          <div id="profilePic" class="flex flex-row-reverse items-center mb-5 p-3 pt-0 gap-3" v-if="loggedIn">
            <img src="https://picsum.photos/id/684/100/100" alt="your profile picture">
            <div id="profileInfo">
              <span class="profileInfoName">fucking fucked up</span>
              <br>
              <span class="notif" v-if="Messagesunread.length">{{Messagesunread.length}} unread messages</span>
              <span class="notif" v-if="!Messagesunread.length">your'e all caught up.</span>
            </div>
          </div>
          <div id="profileNotLogedIn" class="p-3 pt-0" v-if="!loggedIn">
            <span style="color: red;">you are not logged in yet</span>
          </div>
          <ul class="list flex flex-col gap-2 w-full">
            <li class="mb-1 td-2 p-1 text-center rounded-lg w-full" v-for="sideBarButton in sideBarButtons" :key="sideBarButton">{{sideBarButton}}</li>
          </ul>
        </div>
      </div>
    </keep-alive>
  </div>
  <div v-else>
    <div v-if="page %2 == 0">
      <sh @goBack="dashboard=true"/>
    </div>
    <div v-else-if="page %2 == 1">
      <cr @goBack="dashboard=true"/>
    </div>
  </div>
</template>

<script>
import shit from './shit.vue'
import crap from './crap.vue'
import header from '../components/header.vue'
export default {
  components:{
    'sh': shit,
    'cr': crap,
    'vh':header
  },
  props:{
    loggedIn:{
      type: Boolean
    }
  },
  data(){
    return{
      components:['sh','cr'],
      comp:0,
      dashboard: true,
      page: 0,
      showNavCol: true,
      mainInWidth: 80,
      sideBarButtons:['1','2','3','4','5'],
      arr:['shit','shoot','pee','piss','crap','poo','poop'],
      Messagesunread:["absent yesterday","haven't reached monthly goal yet","have worked 23 hours less than average last month"]
    }
  },
  methods:{
    pageChange(n){
      this.page = n;
      this.dashboard = !this.dashboard
    },
  },
  created(){
    if(!this.loggedIn){
      window.location.href = window.location.href + 'login';
      console.log('not logged in')
    }
  },
}
</script>

<style scoped>
.profileInfoName{
  color: var(--w);
  font-size: 14px;
}
.notif{
  color: var(--lw);
  font-size: 14px;
}
#profileInfo{
  background-color: var(--b);
}
#profilePic,
#profileNotLogedIn{
  border-bottom: 1px solid var(--w);
  background-color: var(--b);
}
#profilePic img{
  border-radius: 50%;
  border: 2px solid var(--w);
}
  #header{
    border-bottom:1px solid var(--g);
  }
  #main{
    min-height: 100vh;
  }
  #nav{
    background-color: var(--b);
    width: 20%;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
  }
  #nav button{
    color: var(--w); 
  }
  .list li{
    color: var(--w);
  }
  .list li:hover{
    background-color: var(--w);
    color: var(--b);
  }
  .card{
    border: 1px solid var(--b);
    height: 400px;
    min-width: 320px;
  }
  .mainInContainer{
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
  }
  @media screen and (max-width: 1000px) {
    .mainInContainer{
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
  @media screen and (max-width: 666px) {
    .mainInContainer{
      grid-template-columns: repeat(1, 1fr) !important;
    }
  }
</style>