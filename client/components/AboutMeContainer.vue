<template>
  <div class="about-me-container">
      <!-- Content inserted here! -->
      <div class="row">
          <h2> About Me </h2>

          <p>
              Hi! I'm Nathanial Hapeman and I am a professional software engineer.
              I haven't quite narrowed down what I parti

              I have done work in software development, front-end/back-end web, video game development.

          </p>

      </div>
      <div class="row">
          <img src="~img/stitchedme.jpg" alt="">
          <!-- <img src="~img/blankperson.jpg" alt=""> -->
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

    @import "~scss/main.scss";

    .about-me-container {

        @extend %container;

        display: inline-flex;
        flex-direction: row;

        .row {
            flex-basis: 0;
            flex-grow: 1;

            &:not(:first-child) { margin-left: $margin; }
            &:not(:last-child) { margin-right: $margin; }

            ul {
                list-style: none;

                li {
                    &.question {
                        color: $dark2;
                        margin-top: $margin-small;
                    }

                    &.answer {
                        color: $dark1;
                        font-weight: $fw-bold;
                    }
                }
            }
        }
    }
</style>
