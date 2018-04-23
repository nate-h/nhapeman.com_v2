<template>
  <header class="header-container">

      <img src="~img/logo.png">
      <div class="vertical-rows">
          <a href="#">
              <!-- <img src="~/img/logos/logo.png"> -->
              <h1>Nathanial Hapeman</h1>
          </a>
          <h2>Software Engineer</h2>
      </div>

      <div class="link-holder">
          <a :href="link.link" v-for="link in links" :key="link.name">
              <span>{{link.name}}</span>
          </a>
      </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderContainer',
  data () {
    return {
    }
  },
  props: [
    'links'
  ],
  methods: {
  },
  created: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    @import "~scss/main.scss";

    header {

        @extend %v-center;

        background-color: $dark0;
        // font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        padding: $padding-large;
        text-align: left;

        h1 {
            color: $light1;
        }

        a {
            @extend %v-center;
        }

        img {
            height: 6rem;
            margin: 0;
            padding: 0;
            margin-right: $margin;
            width: 6rem;
        }

        span {
            color: $light1;
            font-size: 2rem;
            margin: 0;
            padding: 0;
        }

        .link-holder {
            @extend %v-center;

            margin-left: auto;

            a {
                span {
                    color: $light1;

                    &:hover {
                        color: $color1;
                        -webkit-transform: scale(1.05);
                        -ms-transform: scale(1.05);
                        transform: scale(1.05);
                        transition: all $transition-time $transition-function;
                    }

                    &:active {
                        color: $color2;
                        -webkit-transform: scale(1.05);
                        -ms-transform: scale(1.05);
                        transform: scale(1.05);
                        transition: all $transition-time $transition-function;
                    }
                }
            }

            a:not(:last-child) {
                margin-right: $margin;
            }

            a:first-child {

            }

        }
    }
</style>
