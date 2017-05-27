<template>
  <div class="card" @click="routeTo({name: routeName, params: {id: id}})">
    <img  v-lazy="bg">
    <div class="mask">
      <slot></slot>
      <h3 class="card-title">
        <i :class="['iconfont', `icon-${type}`]"></i>
        {{ title }}</h3>
      <div class="description">
        <slot name="description"></slot>
      </div>
      <p class="card-postCount">{{ count }} 篇文章</p>
      <el-button
        class="card-btn"
        @click.self="routeTo({name: routeName, params: {id: id}})">查看</el-button>
    </div>
  </div>
</template>

<script>
import { Button } from 'element-ui';
import { imgView } from 'src/filters';

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
    type: {
      type: String,
      default: '',
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
      return imgView(this.background, 300, 300);
    },
  },
  methods: {
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
  @include res-to(xs) {
    width: 100%;
    margin-left: 0;
  }
  // height: 200px;
  box-sizing: border-box;
  margin-left: $offset;
  margin-bottom: $offset - 10px;
  text-align: center;
  line-height: 0;
  background-size: cover;
  color: #fff;
  cursor: pointer;
  .card-title {
    // text-align: left;
    margin-bottom: 10px;
    color: #fff;
    @include line-clamp(2);
    .iconfont {
      font-size: 20px;
    }
  }
  .description {
  }
  .card-postCount {
    display: block;
    margin: 1px auto 20px;
  }
  .card-btn {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translate(-50%);
    transition: transform .5s ease-in-out;
    cursor: pointer;
    background: transparent;
    color: #fff;
    border-width: 1px;
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding: 20px;
    height: 180px;
    width: 100%;
    background: rgba(0,0,0,.3);
    transition: all .2s ease-in;
  }
  &:hover {
    // @include card-shadow;
  }
  &:hover .mask {
    background: rgba(0,0,0,.7);
  }
  &:hover .card-btn {
    background: #eee;
    color: #333;
    border: none;
  }
  img {
    height: 180px;
    min-width: 100%;
    overflow: hidden;
  }
}
</style>
