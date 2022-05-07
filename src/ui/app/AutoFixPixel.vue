<!-- 自动对齐像素 -->
<template>
  <section>
    <h2>快速对齐像素</h2>
    <button class="button button--primary" @click="fixPixel(1)">
      对齐到 1px
    </button>
    <button class="button button--primary" @click="fixPixel(0.5)">
      对齐到 0.5px
    </button>
  </section>
</template>

<script>
import { dispatch, handleEvent } from "../uiMessageHandler";
export default {
  name: "auto-fix-pixel",
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