<template>
    <div class="home-container" v-on:scroll="handleScroll">

        <div class="parallax-hero">
            <div class="parallax-hero-text">
                <h1>Hello, my name is Nathanial Hapeman.</h1>
                <h2>And I love to code!</h2>
            </div>
        </div>

        <div class="home-container-body">
            <h1 id="aboutme" class="main-section">About Me</h1>
            <about-me-container></about-me-container>

            <!-- <div class="">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d37858.78538155945!2d-118.26050664216869!3d34.1259456992745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1524381406579" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div> -->

            <!-- Inject Job Components -->
            <h1 id="jobhistory" class="main-section">Job History</h1>

            <job-container
              company='Applied Invention'
              :img="require('img/ai.png')"
              link='https://www.appliedinvention.com/'
              years='June 2014-Present'
              short-description='Software Engineer'>

                This is my current full time job and an amazing company! At Applied Invention, we work on creating innovative solutions for leading companies and entrepreneurs. All of the projects I've worked on have been extremely interesting and exciting to work on. The longest project I worked on was our in-house geo-spacial game engine that was built for simulations. The engine was written in c++ and used panda3d, an open source 3D game engine. Currently, I am working as a front-end engineer on an in-house website used to collect training data for machine learning algorithms.
            </job-container>
            <job-container
              company='FrackOptima'
              :img="require('img/frackoptima.png')"
              link='http://frackoptima.com/'
              years='May 2016-Present'
              short-description='Software Engineer'>
                I worked part-time at FrackOptima as a software engineer while working full-time for Applied Invention. FrackOptima is a hydraulic fracturing company that specializes in software and services for optimal hydraulic fracturing treatments. There's several systems which make this all possible. Most of my work has been on the company website and the fracking simulator.
            </job-container>

            <h1 id="projects" class="main-section">Projects</h1>
            <project-container :class="{'big-project': true}"
              name='SDL Super Mario Bros Clone'
              :img="require('img/frackoptima.png')"
              link='http://frackoptima.com/'>

              <!-- :video="mariovideo" -->

                This game was developed solely by me using c++/c and SDL as the API. I do not have any plans to publish the game and constructed it for the fun of programming and the awesome learning experience. Some things to note are its heavy use in Polymorphism, Containers, Memory Management, and Threading. The video covers most of the key concepts involved so check it out.
            </project-container>

            <project-container :class="{'big-project': true}"
              name='MyTunes: A Java media player'
              :img="require('img/frackoptima.png')"
              link='http://frackoptima.com/'>

              <!-- :video="mytunesvideo" -->

                I created this media player for the sole purpose of having greater management over my music. The layout and functionality is similar to iTunes but it has some additional features like hotkeys for inserting songs into playlists or checkmarks to see which playlist a song is in. Speed was a big concern while implementing this media player. When a user adds music to the library, all the information for each song is calculated only once (not each time myTunes start) then stored in a hashmap that way I can access information in constant time. Also, I do not copy the songs to a folder, rather I copy the address then load it when the user wants to play. Lastly, when I save the information, I serialize it that way it loads fast. Two of the most difficult things to implement were the regex filter for the search bar and the multi-threading for playing the sound.
            </project-container>

            <!-- Maybe turn this into a grid? -->
            <div class="horizontal">
                <project-container :class="{'big-project': false}"
                  name='Pacman Clone'
                  :img="require('img/pacman.png')"
                  link='http://frackoptima.com/'>
                    Shorter description
                </project-container>

                <project-container :class="{'big-project': false}"
                  name='Minesweeper Clone'
                  :img="require('img/minesweeper.png')"
                  link='http://frackoptima.com/'>
                    Shorter description
                </project-container>
            </div>
        </div>
    </div>
</template>

<script>

import ProjectContainer from './ProjectContainer.vue';
import JobContainer from './JobContainer.vue';
import AboutMeContainer from './AboutMeContainer.vue';

export default {
    name: 'HomeContainer',
    data () {
        return {
            mariovideo: '<iframe width="560" height="315" src="https://www.youtube.com/embed/EMslyjWIPGo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
            mytunesvideo: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1c4erMvMnVQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
            scrolled: false,
            links: [
                {'name': 'About Me', 'link': 'aboutme'},
                {'name': 'Job History', 'link': 'jobhistory'},
                {'name': 'Projects', 'link': 'projects'}
            ]
        };
    },
    components: {
        'project-container': ProjectContainer,
        'job-container': JobContainer,
        'about-me-container': AboutMeContainer
    },
    methods: {
        handleScroll () {
            this.scrolled = window.scrollY > 0;
            let mainHeadings = this.$el.querySelectorAll('.main-section');
            let sideBarButtons = document.querySelectorAll('.link-buttons');
            let topPos = this.$el.scrollTop;
            let mainHeight = this.$el.getBoundingClientRect().height;
            let goalHeight = topPos + 1 / 4 * mainHeight;
            let closestElement = null;
            let closestDistance = Number.MAX_SAFE_INTEGER;

            for (let element of mainHeadings) {
                let headingTop = element.offsetTop;
                let distanceToHeading = goalHeight - headingTop;
                element.classList.remove('active');

                if (distanceToHeading >= 0 && closestDistance > distanceToHeading) {
                    closestDistance = distanceToHeading;
                    closestElement = element;
                }
            }

            // Make sure none of the buttons are active before we mark the new active button.
            for (let element of sideBarButtons) {
                element.classList.remove('active');
            }

            if (closestElement) {
                let id = 'link_' + closestElement.id;
                let element = document.getElementById(id);
                element.classList.add('active');
            }
        }
    },
    created () {
        // this.$emit('route-created')
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    @import "~scss/main.scss";

    .home-container {

        align-items: center;
        display: flex;
        flex-flow: column;
        vertical-align: middle;

        & > * {
            flex: 1 0 auto;
        }

        .home-container-body {

            align-items: center;
            background-color: white;
            display: flex;
            flex-flow: column;
            margin-top: 250px;
            vertical-align: middle;
            width: 100%;

            & > * {
                flex: 1 0 auto;

                &:not(.parallax-hero) {
                    max-width: map-get($breakpoints, large);
                }
            }

            & > h1 {
                background-color: $light1;
                padding: $padding-large;
                z-index: 999;

                &.active {background: red;}
            }
        }
    }

    .parallax-hero {

        @extend %v-center;

        position: fixed;
        z-index: -1;

        width: 100%;
        height: 250px;
        background-image: url('~img/forest.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        -webkit-transform: translateZ(0);
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

    h1 + div {
        border-top: solid 1px #e4e6e8;
        padding-top: 30px !important;
        margin-top: -30px !important;
    }

    .horizontal {

        display: flex;
        flex-direction: row;
        margin: 0;

        div:not(:first-child) {
            margin-left: $margin-small;
        }

        div:not(:last-child) {
            margin-right: $margin-small;
        }

        & > * {
            flex: 1;
        }

    }

</style>
