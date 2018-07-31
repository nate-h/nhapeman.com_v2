<template>
  <div class="projects">
      <router-view></router-view>
    projects
  </div>
</template>

<script>

export default {
    name: 'Projects',
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

    .projects {

        background-color: #525659;
        height: 100%;
        width: calc(100% - 220px);

        .pdf {
            width: 100%;
            height: 100%;
        }
    }

</style>
