<template>
  <div class="about-me-container">
      <!-- Content inserted here! -->
      <div class="row">
          <h2> About Me </h2>

          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

      </div>
      <div class="row">
          <img src="~img/stitchedme.jpg" alt="">
      </div>
      <div class="row">

          <h2> Details </h2>

          <ul>
              <li class="question">Name:</li>
              <li class="answer">Nathanial Hapeman</li>
              <li class="question">Age:</li>
              <li class="answer">28</li>
              <li class="question">Location:</li>
              <li class="answer">Los Angeles, CA</li>
              <li class="question">Education:</li>
              <li class="answer">UC Riverside</li>
              <li class="answer">BS in Mechanical Engineering, minor in Computer Science</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMeContainer',
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

    .about-me-container {
        // box-shadow: 0 4px 6px 0 $shadow;
        display: flex;
        flex-direction: row;
        margin: $margin-large;
        padding: $padding-large;

        .row {
            flex-basis: 0;
            flex-grow: 1;

            &:not(:first-child) { margin-left: $margin; }
            &:not(:last-child) { margin-right: $margin; }

            ul {
                list-style: none;

                li {
                    &.question {
                        color: $text2;
                        margin-top: $margin-small;
                    }

                    &.answer {
                        color: $color4;
                        font-weight: $fw-bold;
                    }
                }
            }
        }
    }
</style>
