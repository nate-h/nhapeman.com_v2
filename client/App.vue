<template>
    <div id="app">

        <!-- Inject Header Component -->
        <header-container :links='links'></header-container>

        <main-container></main-container>

        <!-- Inject Footer Component -->
        <!-- <router-view/> -->
        <!-- <footer-container></footer-container> -->

    </div>
</template>

<script>

import HeaderContainer from './components/HeaderContainer.vue'
import MainContainer from './components/MainContainer.vue'
import FooterContainer from './components/FooterContainer.vue'

export default {
    name: 'App',
    data () {
        return {
            links: [
                {'name': 'Home', 'link': '#/'},
                {'name': 'Projects', 'link': '#'},
                {'name': 'Contact', 'link': '#'},
                {'name': 'Resume', 'link': '#/resume'}
            ]
        }
    },
    components: {
        'header-container': HeaderContainer,
        'main-container': MainContainer,
        'footer-container': FooterContainer
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
    .main-container {
        flex: 1;
        overflow: auto;
    }
    .footer-container {}

    .parallax-hero {

        @extend %v-center;

        width: 100%;
        height: 250px;
        background-image: url('~img/forest.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .parallax-hero-text {
        margin-left: auto;
        margin-right: auto;
        color: white;
        text-align: center;
        text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
        font-family: "Montserrat", sans-serif;
        background-color: $bg-shadow;
    }
}

</style>
