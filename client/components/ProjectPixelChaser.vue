<template>
  <div class="project-pixel-chaser">
    Pixel Chaser
  </div>
</template>

<script>

export default {
    name: 'ProjectPixelChaser',
    data () {
        return {
            links: [
                {'name': 'Home', 'link': '/home'}
            ]
        };
    },
    created () {
        this.$store.commit('setLinks', this.links);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "~scss/main.scss";

    .project-pixel-chaser {
        height: 100%;
        width: 100%;
    }

</style>
