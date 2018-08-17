<template>
  <div class="project-riemann-zeta">
    Riemann Zeta
  </div>
</template>

<script>

export default {
    name: 'ProjectRiemannZeta',
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

    .project-riemann-zeta {
        height: 100%;
        width: 100%;
    }

</style>
