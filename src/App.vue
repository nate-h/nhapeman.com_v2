<template>
  <div id="app">

      <header>
          <div class="container">
              <a href="#">
                  <img src="./assets/logo.png">
                  <span>Nathanial Hapeman's Portfolio</span>
              </a>

              <div class="link-holder">
                  <a href="#" v-for="link in links" :key="link">
                      <span>{{link.name}}</span>
                  </a>
              </div>
          </div>
      </header>

    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      links: [
        {'name': 'Resume', 'link': '#'},
        {'name': 'Projects', 'link': '#'},
        {'name': 'Games', 'link': '#'},
        {'name': 'Interest', 'link': '#'}
      ]
    }
  }

}
</script>

<style lang="scss">

    @import "../static/main.scss";

    #app {
        background-image: url('assets/bg.jpg');
        background-repeat: repeat;
        height: 100%;
        width: 100%;
    }

    header {
        background-color: $color5;
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
                    }

                    &:active {
                        color: $color3;
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
