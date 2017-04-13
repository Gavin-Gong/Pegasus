<template>
  <transition name="fade">
    <div class="back-top"
      @click.prevent.stop="handleBackTop"
      v-if="toTop > 100">
      <i class="el-icon-arrow-up"></i>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    // toTop
    // color
    // animate
    // throttle
    //
  },
  created() {
    window.onscroll = () => {
      // console.log('scroll');
      this.toTop = document.body.scrollTop;
    };
  },
  data() {
    return {
      toTop: document.body.scrollTop,
    };
  },
  methods: {
    handleBackTop() {
      let timeOut;
      function scrollToTop() {
        if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
          window.scrollBy(0, -50);
          timeOut = setTimeout(scrollToTop(), 10);
        } else clearTimeout(timeOut);
      }
      scrollToTop();
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
