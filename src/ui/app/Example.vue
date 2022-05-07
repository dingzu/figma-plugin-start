<!-- 自动对齐像素 -->
<template>
  <div class="app_example">
    <!-- 快速对齐模块 -->
    <section>
      <h2>快速对齐像素</h2>
      <div class="flex">
        <button class="button button--primary" @click="fixPixel(1)">
          对齐到 1px
        </button>
        <button class="button button--primary" @click="fixPixel(0.5)">
          对齐到 0.5px
        </button>
      </div>
    </section>
    <!-- 表单组件展示模块 -->
  </div>
</template>

<script>
import { dispatch, handleEvent } from "../uiMessageHandler";
export default {
  name: "example",
  mounted() {
    handleEvent("autoFixPixelDone", (message) => {
      console.log(message.content);
    });
  },
  methods: {
    fixPixel(key) {
      dispatch("autoFixPixel", key);
    },
  },
};
</script>

<style lang="stylus">
.app_example
  h2
    margin-bottom var(--margin_2n)
</style>