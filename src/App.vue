<template>
  <div id="app">
    <top></top>
    <navbar></navbar>
    <index></index>
    <foot></foot>
    <footBottom></footBottom>
  </div>
</template>

<script>
  import top from './components/top.vue';
  import navbar from './components/nav.vue'
  import index from './components/index.vue'
  import foot from './components/foot.vue'
  import footBottom from './components/footBottom.vue'
export default {
  name: 'app',
  components:{
      top ,navbar,index,foot,footBottom
  },
  data () {
    return {
      msg: '这是新的Vue项目'
    }
  }
}
</script>

<style lang="scss">
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
/*}*/
</style>
