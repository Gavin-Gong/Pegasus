<template>
<el-card class="recommend">
  <h3 style="margin-bottom: 20px"><i class="iconfont icon-Recommend" style="font-size: 22px"></i> 推荐</h3>
  <ul>
    <li>
      <div class="img-wrapper" :style="`background: #ccc url(${$randomImg(250,100)}) 0 / cover`"></div>
      <a class="title">这是一篇文章的名字</a>
      <div class="info">
        <div class="time">
          <i class="iconfont icon-date"></i> 2017-01-02
        </div>
        <div class="hot">
          <i class="iconfont icon-hot"></i> 233
        </div>
      </div>
    </li><li>
      <div class="img-wrapper" :style="`background: #ccc url(${$randomImg(250,100)}) 0 / cover`"></div>
      <a class="title">这是一篇文章的名字</a>
      <div class="info">
        <div class="time">
          <i class="iconfont icon-date"></i> 2017-01-02
        </div>
        <div class="hot">
          <i class="iconfont icon-hot"></i> 233
        </div>
      </div>
    </li><li>
      <div class="img-wrapper" :style="`background: #ccc url(${$randomImg(250,100)}) 0 / cover`"></div>
      <a class="title">这是一篇文章的名字</a>
      <div class="info">
        <div class="time">
          <i class="iconfont icon-date"></i> 2017-01-02
        </div>
        <div class="hot">
          <i class="iconfont icon-hot"></i> 233
        </div>
      </div>
    </li>
  </ul>
</el-card>
</template>

<script>
import { Card } from 'element-ui';

Vue.use(Card);
export default {
  data() {
    return {
    };
  },
};
</script>

<style scoped lang="scss">
.recommend {
  // box-shadow: none!important;
  // background: none!important;
  // border: none!important;
  margin-top: 30px;
  ul {
    // margin-left: -20px;
    li {
      text-align: left;
      box-sizing: border-box;
      padding: 20px;
      width: calc(100% / 3);
      border-right: 1px solid #ddd;
      // margin-left: 20px;
      display: inline-block;
      &:last-child {
        border-right: none;
      }
      .img-wrapper {
        height: 100px;
        // background: #ccc url(http://i1.piimg.com/567571/ff0f3ecfbba27c41.jpg) 0 / cover;
      }
      a {
        cursor: pointer;
        display: block;
        margin-top: 10px;
        font-size: 20px;
      }
      .info {
        text-align: left;
        margin-top: 10px;
        div {
          display: inline-block;
          &:last-child {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
