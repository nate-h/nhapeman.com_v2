<template>
  <div class="home">
      <br>

    <about-me-container></about-me-container>

    <!-- Inject Job Components -->
    <div class="jobs">
        <job-container
          company='Applied Invention'
          :img="require('img/ai.png')"
          link='https://www.appliedinvention.com/'
          years='June 2014-Present'
          short-description='Software Developer'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </job-container>

        <job-container
          company='FrackOptima'
          :img="require('img/frackoptima.png')"
          link='http://frackoptima.com/'
          years='May 2016-Present'
          short-description='Software Developer'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </job-container>
    </div>

  </div>
</template>

<script>

import JobContainer from './JobContainer.vue'
import AboutMeContainer from './AboutMeContainer.vue'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Hi I\'m nate'
    }
  },
  components: {
    'job-container': JobContainer,
    'about-me-container': AboutMeContainer
  },
  created: function () {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    @import "../../static/main.scss";

    .home {
        .jobs {
            // background-color: $color3;
            padding: $padding-large;
        }
    }
</style>
