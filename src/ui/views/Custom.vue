<!-- 这是自定义操作区页面，暂时固定展示内容 -->
<template>
  <div class="figma_app_custom">
    <p>E5E5E5 Figma</p>
    <!--自动对齐像素-->
    <AutoFixPixel />
  </div>
</template>

<script>
import AutoFixPixel from "../app/AutoFixPixel.vue";
export default {
  components: { AutoFixPixel },
  name: "custom",
};
</script>