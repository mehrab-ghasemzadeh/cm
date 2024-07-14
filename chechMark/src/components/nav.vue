<template>
  <div class="mainNavContainer">
    <div id="profilePic" class="flex flex-row-reverse items-center mb-5 p-3 pt-0 gap-3" v-if="loggedIn">
      <img src="https://picsum.photos/id/684/100/100" alt="your profile picture">
      <div id="profileInfo">
        <span class="profileInfoName">fucking fucked up</span>
        <!-- <br> -->
        <span class="notif" v-if="Messagesunread.length">{{Messagesunread.length}} unread messages</span>
        <span class="notif" v-if="!Messagesunread.length">your'e all caught up.</span>
      </div>
    </div>
    <div id="profileNotLogedIn" class="p-3 pt-0" v-if="!loggedIn">
      <span style="color: red;">you are not logged in yet</span>
    </div>
    <ul class="list flex flex-col gap-2 w-full">
      <li class="mb-1" v-for="sideBarButton in sideBarButtons" :key="sideBarButton">
        <router-link class="navVbtn w-full td-2 block text-center p-2 rounded" :to="sideBarButton.url">{{sideBarButton.text}}</router-link>
      </li>
    </ul>
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
      sideBarButtons:[
        {text:'dashboard', url:'/'},
        {text:'report',url:'/report'},
        // {text:'profile',url:'profile'},
        // {text:'settings',url:'settings'},
        // {text:'requests',url:'requests'},
      ],
      Messagesunread:["absent yesterday","haven't reached monthly goal yet","have worked 23 hours less than average last month"],
    }
  }
}
</script>

<style scoped>
.mainNavContainer{
  background-color: var(--b);
}
  .activeNav{
    background-color: var(--w);
  }
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
    display: flex;
    flex-direction: column;
    align-items: start;
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
  .navVbtn{
    border: none;
    background-color: unset;
    color: var(--lw);
  }
  .navVbtn:hover{
    background-color: var(--lw);
    color: var(--b); 
  }
  .router-link-active{
    background-color: var(--w);
    color: var(--b);
  }
  @media screen and (max-width: 1100px) {
    #profilePic{
      flex-wrap: wrap;
      justify-content: center;
    }
    #profileInfo{
      justify-content: center;
    }
  }
</style>