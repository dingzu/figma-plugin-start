<template>
  <div class="figma-plugin">
    <router-view></router-view>
  </div>
</template>

<script>
import styles from "figma-plugin-ds/dist/figma-plugin-ds.css";
export default {
  name: "main",
};
</script>

<style lang="stylus">
@import '../style/design_token'
@import '../style/reset'
</style>