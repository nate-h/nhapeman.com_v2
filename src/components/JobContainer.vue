<template>
  <div class="job-container">
      <!-- Content inserted here! -->
      <img :src="img">
      <span>{{company}}</span>
      <span>{{link}}</span>
      <span>{{years}}</span>
      <span>{{shortDescription}}</span>
      <br>
      LongDescription
      <br>
      <slot></slot>
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

    .job-container {
        background-color: $color1;
        box-shadow: 0 4px 6px 0 $shadow;
        padding: $padding-large;
    }
</style>
