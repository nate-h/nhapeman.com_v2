<template>
  <div class="vector">
    <div v-once v-html="src" class="imdiv">
    <span><slot></slot></span>
    </div>
  </div>

</template>

<script>
// see vue-loader.conf
export default {
  props: ['src']
}
</script>

<style scoped lang="scss">
    @import "../../static/main.scss";

    .vector {
        @extend %v-center;

        .imdiv {
            height: 30px;
            width: 30px;
        }
    }
</style>
