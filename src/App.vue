<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
// import aaaaa from '文件路径'
// import './css/common.css'
import HomePage from './components/homepage'
import Navbar from './components/navbar'
import Footer from './components/footer'
// import Snack from './components/snack'
export default {
  name: 'app',
  components:{
    HomePage,Navbar,Footer
  }
  
}
</script>

<style lang="scss">
@import './css/common.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
</style>
