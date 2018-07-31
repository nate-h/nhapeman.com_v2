<template>
  <div class="project-mario">
    Mario
  </div>
</template>

<script>

export default {
    name: 'ProjectMario',
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

    .project-mario {

        height: 100%;
        width: 100%;

        .pdf {
            width: 100%;
            height: 100%;
        }
    }

</style>
