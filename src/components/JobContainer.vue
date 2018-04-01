<template>
  <div class="job-container">
      <!-- Content inserted here! -->
      <div class="leftside">
        <img :src="img">
      </div>
      <div class="rightside">
          <span>{{company}}</span>
          <span>{{link}}</span>
          <span>{{years}}</span>
          <span>{{shortDescription}}</span>
          <p>
            <slot></slot>
          </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'JobContainer',
  data () {
    return {
    }
  },
  props: [
    'company', 'img', 'link', 'years', 'short-description'
  ],
  methods: {
  },
  created: function () {
    console.log('img', this.img)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    @import "../../static/main.scss";

    $img-side: 200px;

    .job-container {
        background-color: $color1;
        box-shadow: 0 4px 6px 0 $shadow;
        padding: $padding-large;

        .leftside {
            display: inline-block;
            width: $img-side;
        }

        .rightside {
            display: inline-block;
            width: calc(100% - #{$img-side});
        }

        img:first-of-type {
            height:200px;
            width:200px;

        }
    }
</style>
