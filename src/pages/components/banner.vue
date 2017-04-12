<template>
  <div class="banner">
    <div class="bg" :style="{ background: `url(${background}) 0 / cover fixed`}">

    </div>
    <div class="mask">
      <h1 class="banner-title">{{ title }}</h1>
      <div class="description">
        <slot></slot>
      </div>
      <p class="banner-postCount">{{ count }} Posts</p>
    </div>
  </div>
</template>

<script>
import { Button } from 'element-ui';

Vue.use(Button);
export default {
  props: {
    // id: {
    //   type: Number,
    //   required: true,
    // },
    title: {
      type: String,
      required: true,
    },
    count: {
      type: [Number, String],
      required: true,
    },
    background: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '~styles/mixins';
.banner {
  position: relative;
  overflow: hidden;
  width: 100%;
  text-align: center;
  color: #fff;
  .banner-title {
    font-size: 48px;
    color: #fff;
  }
  .bg {
    position: absolute;
    min-width: 100%;
    left: 0; top:0;
    overflow: hidden;
    height: 100%;
  }
  .mask {
    position: relative;
    padding: 40px 20px 60px;
    height: 140px;
    z-index: 20;
    background: rgba(0,0,0,.4);
  }
}
</style>
