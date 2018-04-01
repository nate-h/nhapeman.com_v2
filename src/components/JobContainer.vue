<template>
  <div class="job-container">
      <!-- Content inserted here! -->
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'JobContainer',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    @import "../../static/main.scss";

    .job-container {
        box-shadow: 0 4px 6px 0 $shadow;
    }
</style>
