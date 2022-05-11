<!-- 自动对齐像素 -->
<template>
  <div class="app_example">
    <!-- 快速对齐模块 -->
    <section>
      <h2>快速对齐像素</h2>
      <div class="flex">
        <button @click="fixPixel(1)">对齐到 1px</button>
        <button @click="fixPixel(0.5)">对齐到 0.5px</button>
      </div>
    </section>
    <divide />
    <!-- 表单组件展示模块 -->
    <section>
      <h2>遮罩展示</h2>
      <div class="flex">
        <button @click="GLOBAL.loading.isLoading = true">激活加载</button>
        <button @click="GLOBAL.loading.isLoading = false">停止加载</button>
        <button @click="openMask()">激活mask</button>
      </div>
    </section>
    <divide />
    <section>
      <h2>选择器</h2>
      <f-selector
        :current="selectorData.current"
        :list="selectorData.list"
        @change-value="changeValue"
      />
    </section>
    <divide />
    <section>
      <h2>选择器：有搜索</h2>
      <f-selector
        :current="selectorData.current"
        :list="selectorData.list"
        :search="true"
        @change-value="changeValue"
      />
    </section>
    <divide />
    <section>
      <h2>输入框</h2>
      <input type="text" v-model="inputData" placeholder="请输入" />
    </section>
    <divide />
    <section>
      <h2>Switch</h2>
      <input
        type="checkbox"
        class="switch"
        v-model="switchData"
        @click="switchData = !switchData"
      />
    </section>
  </div>
</template>

<script>
import { dispatch, handleEvent } from "../uiMessageHandler";
export default {
  name: "example",
  data() {
    return {
      inputData: null,
      selectorData: {
        switchData: false,
        current: -1,
        list: [
          {
            value: 0,
            text: "第一项",
          },
          {
            value: 1,
            text: "第二项",
          },
          {
            value: 2,
            text: "第三项",
          },
        ],
      },
    };
  },
  mounted() {
    handleEvent("autoFixPixelDone", (message) => {
      console.log(message.content);
    });
  },
  methods: {
    changeValue(value) {
      console.log("触发修改", value);
      this.selectorData.current = value;
    },
    fixPixel(key) {
      dispatch("autoFixPixel", key);
    },
    openMask() {
      this.GLOBAL.loading.isLoading = true;
      this.GLOBAL.loading.type = "mask";
      this.GLOBAL.loading.text = "将在 3s 后关闭";
      setTimeout(() => {
        this.GLOBAL.loading.text = "将在 2s 后关闭";
      }, 1000);
      setTimeout(() => {
        this.GLOBAL.loading.text = "将在 1s 后关闭";
      }, 2000);
      setTimeout(() => {
        this.GLOBAL.loading.isLoading = false;
        this.GLOBAL.loading.type = "line";
      }, 3000);
    },
  },
};
</script>

<style lang="stylus">
.app_example
  height 100%
  h2
    margin-bottom var(--margin_2n)
</style>