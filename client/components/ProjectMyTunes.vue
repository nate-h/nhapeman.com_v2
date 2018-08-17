<template>
  <div class="project-my-tunes">
    MyTunes
  </div>
</template>

<script>

export default {
    name: 'ProjectMyTunes',
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

    .project-my-tunes {
        height: 100%;
        width: 100%;
    }

</style>
