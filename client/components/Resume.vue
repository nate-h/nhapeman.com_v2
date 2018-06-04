<template>
  <div class="resume">
    <embed class="pdf"
        :src="require('root/resume/Nathanial.Hapeman.Resume.pdf')"
        type='application/pdf'
    >
  </div>
</template>

<script>

export default {
    name: 'Resume',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "~scss/main.scss";

    .resume {

        background-color: #525659;
        height: 100%;
        width: calc(100% - 220px);

        .pdf {
            width: 100%;
            height: 100%;
        }
    }

</style>
