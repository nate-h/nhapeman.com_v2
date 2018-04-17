<template>
    <a :href="link" class="svg-link">
        <div v-once v-html="src" class="imdiv">
        <span><slot></slot></span>
        </div>
    </a>

</template>

<script>
// see vue-loader.conf
export default {
  props: ['src', 'link', 'color-off', 'color-hover', 'color-down']
}
</script>

<style scoped lang="scss">
    @import "../../static/main.scss";

    .svg-link {
        @extend %v-center;

        transition: all $transition-time $transition-function;

        .imdiv {
            height: 30px;
            width: 30px;
        }
    }
</style>
