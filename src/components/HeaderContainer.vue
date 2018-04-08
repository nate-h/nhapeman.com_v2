<template>
  <header class="header-container">
      <div>
          <a href="#">
              <img src="~/img/logo.png">
              <h1>Nathanial Hapeman's Portfolio</h1>
          </a>

          <div class="link-holder">
              <a :href="link.link" v-for="link in links" :key="link.name">
                  <span>{{link.name}}</span>
              </a>
          </div>
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

    @import "../../static/main.scss";

    $img-side: 200px;

    header {
        background-color: $color2;
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
