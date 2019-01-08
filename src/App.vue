<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'index'}">index</router-link>
        </li>
        <li>
          <router-link :to="{name: 'space'}">space</router-link>
        </li>
        <li>
          <router-link :to="{name: 'structure'}">structure</router-link>
        </li>
        <li>
          <router-link :to="{name: 'div'}">div</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
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

<style lang="stylus" scoped>
nav
  ul
    display: flex
    list-style: none
    margin: 0
    padding: 0
    li
      color: red
</style>
