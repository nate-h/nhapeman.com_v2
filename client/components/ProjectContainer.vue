<template>
  <div class="project-container">
      <!-- Content inserted here! -->
      <div class="leftside">
        <img :src="img" v-if="img">
        <div class="" v-html="video" v-if="video">
        </div>

      </div>
      <div class="rightside">

            <h2>
                <a :href="link">{{name}}</a>
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
    'name', 'img', 'link', 'years', 'short-description', 'big-project', 'video'
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

        display: inline-flex;
        flex-direction: row;
        //width: 50%;

        // If big project, make container full width.
        &.big-project {

        }

        &:not(.big-project) {

        }

        .leftside {
            flex-grow: 0;
            flex-shrink: 0;
            margin-right: $padding-large;
            //width: $img-side;
        }

        .rightside {
            flex-grow: 1;
            padding: $padding-small;

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
