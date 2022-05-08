<!-- 这是自定义操作区页面，这里用来做一个示范 -->
<template>
  <div class="figma_app_custom">
    <section>
      <p>这是一个示范项目</p>
    </section>
    <divide />
    <!--自动对齐像素-->
    <ExampleApp />
  </div>
</template>

<script>
import ExampleApp from "../app/ExampleApp.vue";
export default {
  components: { ExampleApp },
  name: "custom",
};
</script>