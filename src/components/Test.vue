<template>
  <div>
    testing123
    <a href="#/help">help</a>

  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../../static/main.scss";

    $linkColor: red;
    a {
        color: $green;
    }
</style>
