<template>
  <div
    class="f-selector"
    :class="[isSelect ? 'selected' : '', search ? 'search' : '']"
  >
    <!--用一个看不见的 select 组件来获取一些状态-->
    <input
      @focus="selectEvent(true, 80)"
      @blur="selectEvent(false, 80)"
      v-model="searchData"
    />
    <!--模拟显示-->
    <div :class="[isSelect ? 'active' : '', 'input']">
      <p>{{ recentText }}</p>
      <icon use="arrow-down-s-line" class="arrow" />
    </div>
    <transition name="fade_down_top">
      <div class="options" v-show="isSelect">
        <div
          class="option search"
          v-if="search"
          :class="[
            searchData ? '' : 'place_holder',
            activeInput ? 'active' : '',
          ]"
          @click="activeInput = true"
        >
          <icon :use="'search'" />
          <p>{{ searchData || "搜索关键词" }}</p>
        </div>
        <div class="option_group">
          <div v-for="item in list" :key="item.value">
            <div
              v-if="!searchData || item.text.indexOf(searchData) != -1"
              :class="[item.value == current ? 'active' : '', 'option']"
              @click="chose(item)"
            >
              <icon use="check-line" />
              <p class="medium white">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "f-selector",
  props: {
    // 选中值
    current: {
      // type: String,
      required: true,
    },
    // 数据表
    list: {
      type: Array,
      required: true,
    },
    // 是否支持搜索
    search: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isSelect: false,
      searchData: undefined,
      activeInput: true,
    };
  },
  computed: {
    recentText() {
      let text = "请选择";
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].value == this.current) {
          text = this.list[i].text;
        }
      }
      return text;
    },
  },
  methods: {
    // 设置选择器状态，用原生的 select 组件获取状态，并模拟给组件
    selectEvent(state, delay) {
      setTimeout(() => {
        this.isSelect = state;
        this.search = undefined;
      }, delay);
    },
    // 选择项目，数据传递到父组件处理，通过修改 current props 值实现变化
    chose(item) {
      this.$emit("change-value", item.value);
    },
  },
};
</script>
<style lang="stylus">
.f-selector
  position relative
  height var(--form_height_n)
  &.selected
    input:hover
      cursor text
  &.search
    >input
      z-index 10
  >input
    position absolute
    top 0
    z-index 1
    display block
    width 100%
    height 100%
    outline none
    border none
    opacity 0
  .input
    .arrow
      position absolute
      top 50%
      right var(--padding_n)
      width 32px
      height 32px
      transform translateY(-50%)
      fill var(--text_color_weak)
    &:focus
      outline none
      border none
    &:hover
      cursor pointer
  .options
    position absolute
    top 0
    z-index 2
    overflow-y scroll
    padding var(--padding_ss) 0
    max-height 360px
    width 100%
    border-radius var(--radius)
    background-color var(--bg_color_alt)
    .option_group
      padding var(--padding_ss) 0
    .option
      display flex
      flex-direction row
      padding 0 var(--padding_n)
      width 100%
      height var(--form_height_n)
      gap var(--margin_l)
      svg
        margin 0 -4px 0 -2px
        width 14px
        opacity 0
        fill var(--text_color_white)
      p
        color var(--text_color_white)
        line-height var(--form_height_2n)
      &:hover
        background-color var(--color_theme)
        cursor pointer
      &.active
        svg
          opacity 1
      &.search
        &:hover
          background-color transparent
          cursor text
        svg
          opacity 1
        &.place_holder
          p
            opacity .4
</style>