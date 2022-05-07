<!-- 这是自定义操作区页面，这里用来做一个示范 -->
<template>
  <div class="figma_app_custom">
    <p>这是一个示范项目</p>
    <!--自动对齐像素-->
    <Example />
  </div>
</template>

<script>
import Example from "../app/Example.vue";
export default {
  components: { Example },
  name: "custom",
};
</script>