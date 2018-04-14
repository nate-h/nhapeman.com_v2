<template>
  <div class="job-container trace">
      <!-- Content inserted here! -->
      <div class="leftside">
        <img :src="img">
      </div>
      <div class="rightside">

            <h2>
                <b><a :href="link">{{company}}</a></b>
                <small class="date">{{years}}</small>
            </h2>

          <p>{{shortDescription}}</p>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    @import "../../static/main.scss";

    $img-side: 200px;

    .job-container {
        display: flex;
        margin: $margin-large;
        padding: $padding-large;

        .leftside {
            flex-grow: 0;
            flex-shrink: 0;
            margin-right: $padding-large;
            width: $img-side;
        }

        .rightside {
            flex-grow: 1;

            .date {
                color: $dark2;
            }
        }

        img:first-of-type {
            height:200px;
            width:200px;

        }
    }
</style>
