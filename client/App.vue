<template>
    <div id="app">

        <!-- Inject Header Component -->
        <header-container :links='links'></header-container>

        <!-- Inject Footer Component -->
        <router-view/>
        <!-- <footer-container></footer-container> -->

    </div>
</template>

<script>

import HeaderContainer from './components/HeaderContainer.vue'
import FooterContainer from './components/FooterContainer.vue'

export default {
    name: 'App',
    data () {
        return {
            links: [
                {'name': 'About Me', 'link': 'aboutme'},
                {'name': 'Job History', 'link': 'jobhistory'},
                {'name': 'Projects', 'link': 'projects'},

                {'name': 'Resume', 'link': '/resume'}
            ]
        }
    },
    components: {
        'header-container': HeaderContainer,
        'footer-container': FooterContainer
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

    .header-container {}
    .home-container {
        flex: 1;
        overflow: auto;
    }
    .footer-container {}
}

</style>
