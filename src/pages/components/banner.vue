<template>
  <div class="banner" :style="[width ? {width,}: '']">
    <div class="bg" :style="{ background: `url(${background}) 0 / cover fixed`}">

    </div>
    <div class="mask">
      <template v-if="$slots.more">
        <el-popover
          ref="popover"
          v-model="showPop">
          <ul class="popover-list">
            <slot name="more"></slot>
            <!--<li><i class="iconfont icon-create"> 创建文章</i></li>
            <li><i class="iconfont icon-edit"> 编辑专题</i></li>
            <li @click="deleteEle"><i class="iconfont icon-delete" style="color: rgba(255, 0, 0, .6)"> 删除专题</i></li>-->
          </ul>
        </el-popover>
        <i class="iconfont icon-more more-btn" v-popover:popover></i>
      </template>
      <!--<el-button v-popover:popover> 删除 </el-button>-->

      <h1 class="banner-title">
        <i v-if="$route.name ==='Topic'"
          class="iconfont icon-topic"></i>
        <i v-else
          class="iconfont icon-tag"></i>

        {{ title }}</h1>

      <div class="description">
        <slot></slot>
      </div>
      <p class="banner-postCount">{{ count }} 文章</p>
    </div>
  </div>
</template>

<script>
import { Button, Popover } from 'element-ui';

Vue.use(Button);
Vue.use(Popover);
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    count: {
      type: [Number, String],
      required: true,
    },
    width: {
      type: [Number, String],
    },
    // background: {
    //   type: String,
    //   required: true,
    // },
  },
  data() {
    return {
      showPop: false,
    };
  },
  computed: {
    background() {
      return this.$randomImg(900, 200);
    },
  },
  methods: {
    deleteEle() {
      this.$msg.error('删除出错');
      this.showPop = false;
    },
  },
};
</script>

<style lang="scss">
@import '~styles/mixins';
.popover-list {
  li {
    cursor: pointer;
    padding: 10px;
    border-bottom: 1px solid #eee;
    &:last-child {
      border-bottom: none;
    }
  }
}
.banner {
  position: relative;
  overflow: hidden;
  width: 100%;
  text-align: center;
  color: #fff;
  .banner-title {
    font-size: 40px;
    .iconfont {
      font-size: 40px;
    }
    @include res-to(xs) {
      font-size: 28px;
      .iconfont {
        font-size: 40px;
      }
    }
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
    @include res-to(sm) {
      height: 60px;
    }
    @include res-to(xs) {
      height: 60px;
    }
    z-index: 20;
    background: rgba(0,0,0,.4);
    .more-btn {
      position: absolute;
      bottom: 20px;
      right: 20px;
      cursor: pointer;
      font-size: 38px!important;
      line-height: 1;
    }
  }
}
</style>
