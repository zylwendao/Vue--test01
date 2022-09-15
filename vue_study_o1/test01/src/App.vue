<template>
  <HelloWorld/>
  <Login v-if="isShow" @func="getMsgFormSon" />
  <br>
  <Home />
  <br>
  <!-- <div @click="myGo">我的跳转</div> -->
  <br>
  <!-- <router-link to="/about">Go to About</router-link> -->
  <br>
  <router-view></router-view>
</template>

<script>
import Login from './components/login/login.vue'
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  data() {
    return {
      isShow:true
    };
  },
  mounted(){
  },
  methods:{
    getMsgFormSon(data){
    console.log('-------00-------')
    this.isShow = data;
      console.log(data)
    }
  },
  components: {
    HelloWorld,
    Login,
    Home
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
