<template>
  <div class="tag">
    <slot></slot>
    <h3 class="tag-title">{{ title }}</h3>
    <p class="tag-postCount">{{ count }} Posts</p>
    <el-button
      class="tag-btn"
      @click="routeTo({name: 'Tag', params: {id: id}})">View</el-button>
    <div class="mask" :style="bg">
    </div>
  </div>
</template>

<script>
import { Button } from 'element-ui';

Vue.use(Button);
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
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
  data() {
    return {
      showViewBtn: false,
    };
  },
  computed: {
    bg() {
      return {
        background: `#222 url(${this.background}) center center no-repeat`,
      };
    },
  },
  methods: {
    // TODO: 抽象到全局
    routeTo(router) {
      this.$router.push(router);
    },
  },
};
</script>

<style lang="scss">
@import '~styles/mixins';
.tag {
  $offset: 20px;
  position: relative;
  display: inline-block;
  width: calc(100% / 3 - 20px);
  margin-left: $offset;
  margin-bottom: $offset;
  padding: 40px 0;
  text-align: center;
  background-size: cover;
  color: #fff;
  // @include mask();
  .tag-title {
    // margin-bottom: 10px;
    color: #fff;
  }
  .tag-postCount {
    display: block;
    margin: 10px auto 20px;
  }
  .tag-btn {
    // z-index: 101;
    position: absolute;
    bottom: -10px;
    left: 50%;
    display: none;
    transform: translate(-50%, 100%);
    transition: transform .5s ease-in-out;
    cursor: pointer;
  }

  &:hover .tag-btn {
    bottom: 10px;
    display: inline-block;
    transition: all .5s ease-in-out;
    transform: translate3d(-50%, 0, 0);
  }
  .mask {
    @include blur-mask();
  }
}
</style>
