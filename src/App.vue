<template>
  <div id="app">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="stylus">
div:last-child
  border: 1px solid green
#app
  display: flex
  #left
    width: 200px
    background: red
  #content
    flex: 1
    text-align: right
</style>
