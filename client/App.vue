<template>
    <div id="app">

        <!-- Inject Header Component -->
        <sidebar-container :links='links'></sidebar-container>

        <!-- Inject Footer Component -->
        <router-view/>

    </div>
</template>

<script>

import SidebarContainer from './components/SidebarContainer.vue'

export default {
    name: 'App',
    data () {
        return {
            links: [
                {'name': 'About Me', 'link': 'aboutme'},
                {'name': 'Job History', 'link': 'jobhistory'},
                {'name': 'Projects', 'link': 'projects'}
            ]
        }
    },
    components: {
        'sidebar-container': SidebarContainer
    },
    methods: {

    },
    created: function () {
        /*
        var parallaxHeight = function parallaxHeightFull() {
            var scrollTop = $(this).scrollTop();
            var sampleSectionTop = $('.sample-section').offset().top;
            var headerHeight = $('.sample-header-text').outerHeight();
            $('.sample-section').css({'margin-top': headerHeight})
            $('.sample-header').css({height: headerHeight - scrollTop})
        }

        parallaxHeight();

        $(window).scroll(function() {
            parallaxHeight();
        })

        $(window).resize(function() {
            parallaxHeight();
        })
        */
    },
    destroyed: function () {

    }

}
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
