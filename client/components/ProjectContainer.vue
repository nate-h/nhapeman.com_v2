<template>
  <div class="project-container">
      <!-- Content inserted here! -->
      <div class="topside">
        <img :src="img">
      </div>
      <div class="bottomside">

            <h2>
                <a :href="link">{{company}}</a>
                <small class="date right">{{years}}</small>
            </h2>

          <h3>{{shortDescription}}</h3>
          <p>
            <slot></slot>
          </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectContainer',
  data () {
    return {
    }
  },
  props: [
    'company', 'img', 'link', 'years', 'short-description', 'big-project'
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

    $img-side: 200px;

    .project-container {

        @extend %container;

        display: flex;
        flex-direction: column;
        //width: 50%;

        // If big project, make container full width.
        &.big-project {
            //width: 100%;
        }

        .topside {
            flex-grow: 0;
            flex-shrink: 0;
            margin-right: $padding-large;
            width: $img-side;
        }

        .bottomside {
            flex-grow: 1;

            .date {
                margin-left: $margin-large;
                color: $dark3;
            }
        }

        img:first-of-type {
            height:200px;
            width:200px;

        }
    }
</style>
