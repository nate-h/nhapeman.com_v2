<template>
  <header class="sidebar-container">

      <img src="~img/logo.png" class="headerlogo">
      <div class="vertical-rows">
          <a href="#">
              <h1>Nathanial Hapeman</h1>
          </a>
          <h2>Software Engineer</h2>
      </div>

      <div class="link-holder">
          <button :id="'link_' + link.link"  v-for="link in links" :key="link.name"
                  class="link-buttons" v-on:click="linkClick(link.link)">
              <span>{{link.name}}</span>
          </button>
      </div>

      <div class="social-links">
          <svg-link src="~img/resume.svg" link="#/resume">
              Resume
          </svg-link>
          <svg-link src="~img/linkedin.svg" link="https://www.linkedin.com/in/nhapeman/">
              LinkedIn
          </svg-link>
          <svg-link src="~img/github.svg" link="https://github.com/nate-h">
              Github
          </svg-link>
      </div>
  </header>
</template>

<script>

import router from '../router';

export default {
    name: 'SidebarContainer',
    data () {
        return {
        };
    },
    props: [],
    methods: {
        linkClick (link) {
            let element = document.getElementById(link);
            let scrollOptions = {
                'behavior': 'smooth',
                'block': 'start',
                'inline': 'nearest'
            };
            element.scrollIntoView(scrollOptions);
        }
    },
    watch: {
        $route (to, from) {
            console.log('to', to);
            console.log('from', from);
        }
    },
    created () {
        // Routes - in case need in the future.
        this.links = router.options.routes;
        console.log('this.links', this.links);
        console.log('router', router.currentRoute);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    @import "~scss/main.scss";

    header {

        @extend %h-center;

        background-color: $dark0;
        padding: $padding-large;
        text-align: left;
        width: 220px;

        .headerlogo:hover {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }

        a {
            @extend %v-center;
        }

        img {
            height: 6rem;
            margin: 0;
            padding: 0;
            margin-right: $margin;
            width: 6rem;

            -webkit-transition: -webkit-transform .8s ease-in-out;
            transition: transform .8s ease-in-out;
        }

        span {
            color: $light1;
            font-size: 2rem;
            margin: 0;
            padding: 0;
        }

        .link-holder {

            @extend %h-center;

            margin-top: $margin-large;

            .link-buttons {

                @extend %button;

                background-color: transparent;
                margin: 0;

                &.active span {
                    color: $color2;
                    -webkit-transform: scale(1.05);
                    -ms-transform: scale(1.05);
                    transform: scale(1.05);
                    transition: all $transition-time $transition-function;
                }

                span {
                    color: $light1;

                    &:hover {
                        color: $color1;
                        -webkit-transform: scale(1.05);
                        -ms-transform: scale(1.05);
                        transform: scale(1.05);
                        transition: all $transition-time $transition-function;
                    }

                    &:active {
                        color: $color2;
                        -webkit-transform: scale(1.05);
                        -ms-transform: scale(1.05);
                        transform: scale(1.05);
                        transition: all $transition-time $transition-function;
                    }
                }
            }
        }

        .social-links {

            @extend %h-center;

            margin-top: auto;

            & > * {
                margin: 4px;
            }

            .svg-link {
                fill: $light1;
                color: $light1;

                &:hover {
                    fill: $color1;
                    color: $color1;
                }

                &:active {
                    fill: $color2;
                    color: $color2;
                }
            }
        }

    }
</style>
