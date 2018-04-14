<template>
  <div class="footer-container">

      <h2>
          I'm the footer
      </h2>

    <p>&copy; 2018 Nathanial Hapeman. All rights reserved.</p>

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
        color: $light1;
        display: flex;
        padding: $padding-large;

        h2 {
            color: $light1;
        }


        .leftside {
            flex-grow: 0;
            flex-shrink: 0;
            margin-right: $padding-large;
            width: $img-side;
        }

        .rightside {
            flex-grow: 1;

            .date {
                color: $dark2;
            }
        }
    }
</style>
