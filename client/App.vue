<template>
    <div id="app">

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
    },
    methods: {

    },
    created: function () {

    },
    destroyed: function () {

    }

};
</script>

<style lang="scss">

@import "~scss/main.scss";

#app {
    display: flex;
    flex-direction: row;
    height: 100%;
    overflow: hidden;
    width: 100%;

    & > * {
        flex-shrink: 0;
    }

    .sidebar-container {}
    .home-container {
        flex: 1;
        overflow: auto;
    }
    .footer-container {}
}

</style>
