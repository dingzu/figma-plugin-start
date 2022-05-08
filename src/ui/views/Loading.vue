<!--这是加载页-->
<template>
  <transition name="fade-in-module">
    <!--轻加载模式-->
    <div
      class="loading-bar"
      v-if="$root.loading.isLoading && $root.loading.type == 'line'"
    ></div>
    <!--阻断操作模式-->
    <div
      class="loading-mask"
      v-else-if="$root.loading.isLoading && $root.loading.type == 'mask'"
    >
      <div class="card">
        <h2>{{ $root.loading.text }}</h2>
      </div>
    </div>
    <!--无加载-->
    <div v-else class="loading"></div>
  </transition>
</template>

<script>
import { dispatch, handleEvent } from "../uiMessageHandler";
export default {
  name: "loading",
  mounted() {
    // 可以接收从 js 文件中发送的信息
    handleEvent("pushLoadingMsg", (message) => {});
  },
};
</script>

<style lang="stylus">
.loading-bar
  position absolute
  top 0
  right 0
  left 0
  z-index 1000
  overflow hidden
  height 3px
  background-color var(--bg_color_main)
  &:after
    position absolute
    top 1px
    display block
    width 100px
    height 2px
    background-color #fff
    background-color var(--color_theme)
    content ''
    animation scroll 1s ease-in-out infinite

.loading-mask
  position absolute
  top 0
  right 0
  bottom 0
  left 0
  z-index 1000
  display flex
  justify-content center
  align-items center
  overflow hidden
  background-color var(--bg_color_mask)
  .card
    display flex
    justify-content center
    align-items center
    width 200px
    height 120px
    border-radius var(--radius)
    background-color var(--bg_color_main)
    h2
      text-align center

@keyframes scroll
  from
    left -100px
  to
    left 100%

.fade-in-module-enter-active, .fade-in-module-leave-active
  transition 200ms all ease-in-out
  .card
    transition 200ms all ease-in-out

.fade-in-module-enter, .fade-in-module-leave-to
  opacity 0
  .card
    transform translateY(20px)

.fade-in-module-enter-to, .fade-in-module-leave
  opacity 1
  .card
    transform translateY(0px)
</style>