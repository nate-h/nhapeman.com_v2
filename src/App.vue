<template>
  <div id="app">

      <header>
          This is the header

      </header>

    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">

    @import "../static/main.scss";

</style>
