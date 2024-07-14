<template>
  <div id="loginPage" class="flex justify-center items-center">
    <div class="flex flex-col gap-5 loginBox p-10 rounded-xl bgw">
      <h1 class="mb-5 text-center">login</h1>
      <div>
        <input class="p-2 td-2" name="username" placeholder="username" v-model="username" type="text">
      </div>
      <div>
        <input class="p-2 td-2" name="password" placeholder="password" v-model="password" type="text">
      </div>
      <select name="provider" class="p-2 td-2" v-model="provider">
        <option v-for="(el , i) in providers" :key="i" :value="el.val">{{el.name}}</option>
      </select>
      <div v-if="errors.length > 0" class="errorContainer bgw">
        <span class="errorMsg">{{ errors.length }} errors</span>
        <ul>
          <li v-for="e in errors" :key="e">
            <span class="errorMsg">{{ e }}</span>
          </li>
        </ul>
      </div>
      <button class="text-center p-2 rounded-xl td-5" @click="logIn()">login</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:'',
      password:'',
      provider:'',
      errors:[],
      providers:[
        {name: 'shit', val: 'shitty'},
        {name: 'crap', val: 'crappy'},
        {name: 'fuck', val: 'fucked up'},
      ]
    }
  },
  methods:{
    logIn(){
      this.errors = []
      if(this.username == ''){
        this.errors.push('enter your username')
      }
      if(this.password == ''){
        this.errors.push('enter your password')
      }
      if(this.provider == ''){
        this.errors.push('select your role')
      }
      // if(this.errors.length == 0){
        this.$emit('lgstate')
        window.location.href = window.location.href.slice(0,-5)
        // console.log(window.location.href)
      // }
    }
  },
}
</script>

<style scoped>
  .errorMsg{
    color: red;
  }
  #loginPage{
    min-height: 100vh;
  }
  input{
    border-bottom: 1px solid var(--g);
    color: var(--b);
    width: 300px;
  }
  input:focus,
  select:focus{
    outline: none;
    font-weight: bold;
  }
  .loginBox{
    width: fit-content;
    border: 1px solid var(--g);
  }
  button{
    border: 1px solid var(--g);
    background-color: var(--w);
    color: var(--g);
    width: 300px;
  }
  button:hover{
    background-color: var(--g);
    color: var(--w);
    font-weight: bold;
  }
  select{
    border-bottom: 1px solid var(--g);
    color: var(--g);
  }
</style>