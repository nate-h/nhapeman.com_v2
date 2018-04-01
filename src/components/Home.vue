<template>
  <div class="home">
    <h1>{{ msg }}</h1>

    <job-container>
        <img src="~img/ai.png">
        Add image
        Job name
        years there
        short description
        Long description
    </job-container>
  </div>
</template>

<script>

import JobContainer from './JobContainer.vue'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Hi I\'m nate'
    }
  },
  components: {
    'job-container': JobContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    @import "../../static/main.scss";

    .home {
        box-shadow: 0 4px 6px 0 $shadow;
    }
</style>
