<template>
  <div class="div">
    Index study
    <p>
      <router-link :to="{name: 'index'}">index</router-link>
      <router-link :to="{name: 'space'}">space</router-link>
      <router-link :to="{name: 'structure'}">structure</router-link>
      <router-link :to="{name: 'div'}">div</router-link>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data () {
      return {
        name: 'Index'
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
