<template>
  <div id="app">
    <Navbar></Navbar>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
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
  width: 100%;
  height: 100%;
}
.slide-fade{
  position: absolute;left:0;right: 0;
}
.slide-fade-enter-active {
  transition: all 1.8s ease;
}
.slide-fade-leave-active {

  transition: all .3s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;right: 0;
  transform: translateY(500px);
  opacity: 0;
}
</style>
