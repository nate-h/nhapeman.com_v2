<template>
  <div class="footer-container">
      <!-- Content inserted here! -->
      <div class="leftside">
          text
      </div>
      <div class="rightside">

            <h2>
                I'm the footer
            </h2>

          <p>&copy; 2018 Nathanial Hapeman. All rights reserved.</p>
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
        background-color: $color1;
        box-shadow: 0 4px 6px 0 $shadow;
        color: $color5;
        display: flex;
        margin: $margin-large;
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
