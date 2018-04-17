<template>
  <div class="footer-container">

      <div class="leftside">
          <h2>Nathanial Hapeman</h2>
          <p>Handmade by me &copy; 2018.</p>
      </div>
      <div class="rightside">
          <p>LinkedIn</p>
          <vector src="~img/github.svg">Some texty</vector>
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
        //background-color: $dark0;
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
    }
</style>
