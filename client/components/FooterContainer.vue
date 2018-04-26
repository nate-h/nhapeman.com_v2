<template>
  <div class="footer-container">

      <div class="leftside">
          <h2>Nathanial Hapeman</h2>
          <p>Handmade by me &copy; 2018.</p>
      </div>
      <div class="rightside">
          <svg-link src="~img/linkedin.svg" link="https://www.linkedin.com/in/nhapeman/">
              LinkedIn
          </svg-link>
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

    @import "~scss/main.scss";

    $img-side: 200px;

    .footer-container {
        background-color: $dark0;
        color: $light1;
        display: flex;
        flex-direction: row;
        padding: $padding-large;
        height: 10rem;

        h2 {
            color: $light1;
        }

        .leftside, .rightside {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            justify-content: center;

            & > * {
                margin: 4px;
            }
        }

        .svg-link {
            fill: $light1;
            color: $light1;
            margin-left: auto;

            &:hover {
                fill: $color1;
                color: $color1;
            }

            &:active {
                fill: $color2;
                color: $color2;
            }
        }
    }
</style>
