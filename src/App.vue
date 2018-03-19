<template>
  <div id="app">

      <header>
          <a href="#">
              <img src="./assets/logo.png">
              <span>Nathanial Hapeman's Portfolio</span>
          </a>

      </header>

    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">

    @import "../static/main.scss";

    #app {
        background-image: url('assets/bg.jpg');
        background-repeat: repeat;
        height: 100%;
        width: 100%;
    }

    header {
        background-color: $color5;
        padding: $padding-large;
        text-align: left;

        a {
            align-items: center;
            display: flex;
            vertical-align: middle
        }

        img {
            height: 2rem;
            margin: 0;
            padding: 0;
            margin-right: $margin;
            width: 2rem;
        }

        span {
            color: $white-text;
            font-size: 2rem;
            margin: 0;
            padding: 0;
        }

    }

</style>
