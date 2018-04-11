<template>
  <div class="resume">
    <embed class="pdf"
        :src="require('root/resume/Nathanial.Hapeman.Resume.pdf')"
        type='application/pdf'
    >
  </div>
</template>

<script>

// import PDFResume from ''

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
    @import "../../static/main.scss";

    .resume {

        width: 100%;
        height: 100%;

        .pdf {
            width: 100%;
            height: 100%;
        }
    }

</style>
