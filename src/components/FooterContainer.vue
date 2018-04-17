<template>
  <div class="footer-container">

      <div class="leftside">
          <h2>Nathanial Hapeman</h2>
          <p>Handmade by me &copy; 2018.</p>
      </div>
      <div class="rightside">
          <p>LinkedIn</p>
          <svg-link src="~img/github.svg" link="https://github.com/nate-h">
              Github
          </svg-link>
      </div>

  </div>
</template>

<script>
export default {
  name: 'FooterContainer',
  data () {
    return {
    }
  },
  props: [

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

    .footer-container {
        background-color: $dark0;
        background-color: #666;
        color: $light1;
        display: flex;
        padding: $padding-large;
        height: 10rem;

        h2 {
            color: $light1;
        }

        .leftside {
            width: 50%;
        }

        .rightside {
            text-align: right;
        }

        .svg-link {
            fill: white;

            &:hover {
                fill: grey;
            }

            &:active {
                fill: red;
            }
        }
    }
</style>
