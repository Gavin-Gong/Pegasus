<template>
  <transition name="fade">
    <div class="backTop-wrapper">
      <div class="back-top"
        @click.prevent.stop="handleBackTop"
        v-show="toTop > 100">
        <i class="el-icon-arrow-up"></i>
      </div>
    </div>
  </transition>
</template>

<script>
import MoveTo from 'moveto';
import { throttle } from 'lodash';

export default {
  props: {
    // toTop
    // color
    // animate
    // throttle
    //
  },
  created() {
    window.onscroll = throttle(() => {
      this.toTop = document.body.scrollTop;
    }, 500);
  },
  data() {
    return {
      toTop: document.body.scrollTop,
    };
  },
  methods: {
    handleBackTop() {
      const moveTo = new MoveTo();
      const target = document.body;
      moveTo.move(target);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/transitions";
@import "~styles/mixins";

.back-top {
  position: fixed;
  right: 80px;
  bottom: 80px;
  @include res-to(xs) {
    right: 10px;
    bottom: 20px;
  };
  padding: 20px;
  line-height: 0;
  cursor: pointer;
  border-radius: 50%;
  background: #565a5f;
  color: #eee;
  box-shadow: #999 0px 2px 10px;
}
</style>
