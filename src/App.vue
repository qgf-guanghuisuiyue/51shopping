<template>
  <div id="app">
    <top></top>
    <navbar></navbar>
  </div>
</template>

<script>
  import top from './components/top.vue';
  import navbar from './components/nav.vue'
export default {
  name: 'app',
  components:{
      top ,navbar
  },
  data () {
    return {
      msg: '这是新的Vue项目'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
