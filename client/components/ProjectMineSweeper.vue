<template>
  <div class="project-mine-sweeper">
    Minesweeper
  </div>
</template>

<script>

export default {
    name: 'ProjectMineSweeper',
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

    .project-mine-sweeper {
        height: 100%;
        width: 100%;
    }

</style>
