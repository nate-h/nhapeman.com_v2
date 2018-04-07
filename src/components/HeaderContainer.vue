<template>
  <header class="header-container">
      <div class="container">
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

    .header-container {
        background-color: $color4;
        box-shadow: 0 4px 6px 0 $shadow;
        color: $color5;
        display: flex;
        padding: $padding-large;

        .leftside {
            flex-grow: 0;
            flex-shrink: 0;
            margin-right: $padding-large;
            width: $img-side;
        }

        .rightside {
            flex-grow: 1;

            .date {
                color: $text2;
            }
        }
    }
</style>
