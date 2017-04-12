<template>
  <div class="card">
    <img :src="background" alt="">
    <div class="mask">
      <slot></slot>
      <h3 class="card-title">{{ title }}</h3>
      <div class="description">
        <slot name="description"></slot>
      </div>
      <p class="card-postCount">{{ count }} Posts</p>
      <el-button
        class="card-btn"
        @click="routeTo({name: routeName, params: {id: id}})">View</el-button>
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
    routeName: {
      type: String,
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
.card {
  $offset: 30px;
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: calc(100% / 3 - 40px);
  // height: 200px;
  box-sizing: border-box;
  margin-left: $offset;
  margin-bottom: $offset - 10px;
  text-align: center;
  background-size: cover;
  color: #fff;
  cursor: pointer;
  img {
    position: absolute;
    min-height: 100%;
    min-width: 100%;
    left: 0; top:0;
    overflow: hidden;
  }
  .card-title {
    // text-align: left;
    color: #fff;
    @include line-clamp(2);
  }
  .description {
  }
  .card-postCount {
    display: block;
    margin: 10px auto 20px;
  }
  .card-btn {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translate(-50%);
    transition: transform .5s ease-in-out;
    cursor: pointer;
  }
  .mask {
    position: relative;
    padding: 40px 20px 60px;
    height: 100px;
    z-index: 20;
    background: rgba(0,0,0,.4);
  }
}
</style>
