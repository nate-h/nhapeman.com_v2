<template>
  <div id="app">

      <header>
          <div class="container">
              <a href="#">
                  <img src="./assets/logo.png">
                  <h1>Nathanial Hapeman's Portfolio</h1>
              </a>

              <div class="link-holder">
                  <a href="#" v-for="link in links" :key="link.name">
                      <span>{{link.name}}</span>
                  </a>
              </div>
          </div>
      </header>

    <!-- All routes get injected here. -->
    <div class="container">
        <router-view/>
    </div>

    <!-- Inject Footer Component -->
    <footer-container></footer-container>

  </div>
</template>

<script>

import FooterContainer from './components/FooterContainer.vue'

export default {
  name: 'App',
  data () {
    return {
      links: [
        {'name': 'Home', 'link': '#'},
        {'name': 'Resume', 'link': '#'},
        {'name': 'Interactive', 'link': '#'}
      ]
    }
  },
  components: {
    'footer-container': FooterContainer
  }

}
</script>

<style lang="scss">

    @import "../static/main.scss";

    #app {
        background: $color6;
        height: 100%;
        width: 100%;
    }

    header {
        background-color: white;
        padding: $padding-large;
        text-align: left;

        a {
            @extend %v-center;
        }

        img {
            height: 2rem;
            margin: 0;
            padding: 0;
            margin-right: $margin;
            width: 2rem;
        }

        span {
            color: $white-text;
            font-size: 2rem;
            margin: 0;
            padding: 0;
        }

        .link-holder {
            @extend %v-center;

            float: right;

            a {
                span {
                    color: $color1;

                    &:hover {
                        color: $color2;
                        -webkit-transform: scale(1.05);
                        -ms-transform: scale(1.05);
                        transform: scale(1.05);
                        transition: all .2s ease-in;
                    }

                    &:active {
                        color: $color3;
                        -webkit-transform: scale(1.05);
                        -ms-transform: scale(1.05);
                        transform: scale(1.05);
                        transition: all .2s ease-in;
                    }
                }
            }

            a:not(:last-child) {
                margin-right: $margin;
            }

            a:first-child {
                margin-left: auto;
            }

        }
    }

</style>
