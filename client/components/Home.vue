<template>
  <div class="home container">
      <br>

    <about-me-container></about-me-container>

    <!-- Inject Job Components -->
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

    <project-container :class="{'big-project': true}"
      company='Future project name'
      :img="require('img/frackoptima.png')"
      link='http://frackoptima.com/'
      years='May 2016-Present'
      short-description='Software Developer'>
        Shorter description
    </project-container>

    <div class="horizontal">
        <project-container :class="{'big-project': false}"
          company='Future project name 2'
          :img="require('img/frackoptima.png')"
          link='http://frackoptima.com/'
          years='May 2016-Present'
          short-description='Software Developer'>
            Shorter description
        </project-container>

        <project-container :class="{'big-project': false}"
          company='Future project name 3'
          :img="require('img/frackoptima.png')"
          link='http://frackoptima.com/'
          years='May 2016-Present'
          short-description='Software Developer'>
            Shorter description
        </project-container>
    </div>

    <project-container :class="{'big-project': true}"
      company='Future project name 4'
      :img="require('img/frackoptima.png')"
      link='http://frackoptima.com/'
      years='May 2016-Present'
      short-description='Software Developer'>
        Shorter description
    </project-container>

  </div>
</template>

<script>

import ProjectContainer from './ProjectContainer.vue'
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
    'project-container': ProjectContainer,
    'job-container': JobContainer,
    'about-me-container': AboutMeContainer
  },
  created: function () {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    @import "~scss/main.scss";

    .home {

    }

    .horizontal {
        display: flex;
        flex-direction: row;

        div:not(:first-child) {
            margin-left: $margin-large;
        }

        div:not(:last-child) {
            margin-right: $margin-large;
        }

        & > * {
            flex: 1;
        }

    }

</style>
