<template>
  <div id="app">

    <!-- Inject Header Component -->
    <header-container :links='links'></header-container>

    <!-- All routes get injected here. -->
    <div class="container">
        <router-view/>
    </div>

    <!-- Inject Footer Component -->
    <footer-container></footer-container>

  </div>
</template>

<script>

import HeaderContainer from './components/HeaderContainer.vue'
import FooterContainer from './components/FooterContainer.vue'

export default {
  name: 'App',
  data () {
    return {
      links: [
        {'name': 'Home', 'link': '#/'},
        {'name': 'Resume', 'link': '#/resume'},
        {'name': 'Interactive', 'link': '#'}
      ]
    }
  },
  components: {
    'header-container': HeaderContainer,
    'footer-container': FooterContainer
  }

}
</script>

<style lang="scss">

    @import "../static/main.scss";

    #app {
        background: white;
        height: 100%;
        width: 100%;
    }

</style>
