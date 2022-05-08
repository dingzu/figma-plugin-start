<template>
  <div class="figma-plugin">
    <router-view></router-view>
    <Loading />
  </div>
</template>

<script>
import Loading from "./views/Loading.vue";
export default {
  name: "root",
  components: { Loading },
  data() {
    return {
      loading: {
        isLoading: false, // false,true
        type: "line", // line,mask
        text: "", // string
      },
    };
  },
};
</script>

<style lang="stylus">
@import '../style/reset'
@import '../style/design_token'
@import '../style/base_class'

.figma-plugin
  position relative
  width 100%
  height 100%
</style>