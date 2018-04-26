<template>
  <div id="app">

    <div class="sample-header">
      <div class="sample-header-section">
        <h1>Scroll down to see the parallax effect</h1>
        <h2>Background landcape scrolls with its own depth </h2>
      </div>
    </div>

    <!-- Inject Header Component -->
    <header-container :links='links'></header-container>

    <!-- All routes get injected here. -->
    <div class="router-view">
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
  },
  created: function () {

    /*
      var parallaxHeight = function parallaxHeightFull() {
        var scrollTop = $(this).scrollTop();
        var sampleSectionTop = $('.sample-section').offset().top;
        var headerHeight = $('.sample-header-section').outerHeight();
        $('.sample-section').css({'margin-top': headerHeight})
        $('.sample-header').css({height: headerHeight - scrollTop})
      }

      parallaxHeight();

      $(window).scroll(function() {
        parallaxHeight();
      })

      $(window).resize(function() {
        parallaxHeight();
      })
    */
  }

}
</script>

<style lang="scss">

    @import "~scss/main.scss";

    #app {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;

        & > * {
          flex-shrink: 0;
        }

        .header-container {}
        .router-view {flex: 1;}
        .footer-container {}

        .sample-header {
              position: fixed;
              left: 0;
              top: 0;
              width: 100%;
              background-image: url('~img/forest.jpg');
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
            }
            .sample-header::before {
              content: "";
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background-color: MidnightBlue;
              opacity: 0.3;
            }
            .sample-header-section {
              position: relative;
              padding: 15% 0 10%;
              max-width: 640px;
              margin-left: auto;
              margin-right: auto;
              color: white;
              text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
              font-family: "Montserrat", sans-serif;
            }
    }

</style>
