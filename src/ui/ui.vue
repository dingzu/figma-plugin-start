<template>
  <div class="figma-plugin">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "main",
};
</script>

<style lang="stylus">
@import '../style/reset'
@import '../style/design_token'
@import '../style/base_class'
</style>