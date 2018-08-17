<template>
    <div class="root-div t-to-b">
        <router-view></router-view>

        <h1 id="projects">Projects at a glance</h1>

        <div class="t-to-b">
            <project-container :class="{'big-project': true}"
              name='SDL Super Mario Bros Clone'
              :video="mariovideo"
              link='http://frackoptima.com/'>

                This game was developed solely by me using c++/c and SDL as the API. I do not have any plans to publish the game and constructed it for the fun of programming and the awesome learning experience. Some things to note are its heavy use in Polymorphism, Containers, Memory Management, and Threading. The video covers most of the key concepts involved so check it out.
            </project-container>

            <project-container :class="{'big-project': true}"
              name='MyTunes: A Java media player'
              :video="mytunesvideo"
              link='http://frackoptima.com/'>

                I created this media player for the sole purpose of having greater management over my music. The layout and functionality is similar to iTunes but it has some additional features like hotkeys for inserting songs into playlists or checkmarks to see which playlist a song is in. Speed was a big concern while implementing this media player. When a user adds music to the library, all the information for each song is calculated only once (not each time myTunes start) then stored in a hashmap that way I can access information in constant time. Also, I do not copy the songs to a folder, rather I copy the address then load it when the user wants to play. Lastly, when I save the information, I serialize it that way it loads fast. Two of the most difficult things to implement were the regex filter for the search bar and the multi-threading for playing the sound.
            </project-container>

            <!-- Maybe turn this into a grid? -->
            <div class="l-to-r">
                <project-container class="grow"
                  :class="{'big-project': false}"
                  name='Pacman Clone'
                  :img="require('img/pacman.png')"
                  link='http://frackoptima.com/'>
                  As a learning experience, I remade Pacman. Not just to improve
                  my Javascript skills but to brush up on some algorithms
                  like using Dijkstra's for ghost movement.
                </project-container>

                <project-container class="grow"
                  :class="{'big-project': false}"
                  name='Minesweeper Clone'
                  :img="require('img/minesweeper.png')"
                  link='http://frackoptima.com/'>
                    I remade Minesweeper not just to be the millionth to do so
                    but so I can also learn some of the basics of Photoshop, design
                    and Javascript canvases.
                </project-container>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectContainer from './ProjectContainer.vue';
export default {
    name: 'Projects',
    data () {
        return {
            mariovideo: '<iframe width="560" height="315" src="https://www.youtube.com/embed/EMslyjWIPGo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
            mytunesvideo: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1c4erMvMnVQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
            links: [
                {'name': 'Home', 'link': '/home'}
            ]
        };
    },
    components: {
        'project-container': ProjectContainer
    },
    created () {
        this.$store.commit('setLinks', this.links);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "~scss/main.scss";

    .root-div {

        & > * {
            flex-shrink: 0;
        }

        & > h1 {
            background-color: $light1;
            padding: $padding-large;
            z-index: 999;
        }

        h1 + div {
            border-top: solid 1px #e4e6e8;
            padding-top: 30px !important;
            margin-top: -30px !important;
        }
    }

</style>
