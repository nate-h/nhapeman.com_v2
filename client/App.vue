<template>
    <div id="app" class="l-to-r">

        <!-- Inject sidebar -->
        <sidebar-container></sidebar-container>

        <!-- Inject routes -->
        <router-view/>
    </div>
</template>

<script>

import SidebarContainer from './components/SidebarContainer.vue';

export default {
    name: 'App',
    data () {
        return {
        };
    },
    components: {
        'sidebar-container': SidebarContainer
    }
};
</script>

<style lang="scss">

@import "~scss/main.scss";

#app {
    .root-div {
        overflow: auto;
    }
}

</style>
