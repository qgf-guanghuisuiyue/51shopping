<template>
  <div id="app">
    <top></top>
  </div>
</template>

<script>
  import top from './components/navbar.vue'
export default {
  name: 'app',
  components:{
      top
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
