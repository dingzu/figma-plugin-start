<template>
  <svg class="f_icon">
    <use :xlink:href="'#' + use" />
  </svg>
</template>

<script>
let importAll = (requireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../../assets/icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

export default {
  name: "icon",
  props: ["use"],
};
</script>

<style lang="stylus">
.f_icon
  fill var(--text_color_main)
</style>