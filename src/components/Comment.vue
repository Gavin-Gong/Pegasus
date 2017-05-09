<template>
  <div class="comment">
    <el-card class="clear-fix">
      <h3 class="title"><i class="iconfont icon-comment"></i> 评论</h3>

      <div class="comment-bar">
        <h4>32 条评论</h4>
        <button>
          <i class="iconfont icon-sort"></i>
          切换为时间排序</button>
      </div>
      <div class="comment-item">
        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg" alt="">
        <p class="name">Diana</p><br>
        <p class="info">3 天前</p>
        <p class="content">还不错的文章</p>
        <div class="comment-footer">
          <ul>
            <li><i class="iconfont icon-like"> 66</i></li>
            <li><i class="iconfont icon-down"> 66</i></li>
          </ul>
        </div>
      </div>
      <div class="comment-item">
        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg" alt="">
        <p class="name">Diana</p><br>
        <p class="info">3 天前</p>
        <p class="content">伴随着《人民的名义》火爆全网，我也追了起来。 给我留下最深印象的却是祁同伟与高小琴之间的关系</p>
      </div>

      <el-button class="more-comment-btn">
        <i class="iconfont icon-load-more"></i>
        更多评论</el-button>
        <!--输入评论-->
      <el-input
        type="textarea"
        class="comment-box"
        :autosize="{ minRows: 4, maxRows: 8}"
        placeholder="请输入内容"
        v-model="commentCtx">
      </el-input>
      <el-button type="primary" style="margin-bottom: 40px">
          <i class="iconfont icon-send"></i>

          发表</el-button>
    </el-card>
  </div>
</template>

<script>
  import { Card, Popover, Button } from 'element-ui';

  Vue.use(Card);
  Vue.use(Popover);
  Vue.use(Button);

  export default {
    data() {
      return {
        commentCtx: '',
      };
    },
  };
</script>

<style lang="scss" scoped>
@import '~styles/mixins';
.comment {
  .comment-box {
    margin-bottom: 10px;
    .el-textarea__inner {
      border-radius: 5px!important;
    }
  }
  .more-comment-btn {
    display: block;
    margin: 15px auto 20px;
  }
  .comment-footer {
    ul {
      @include reset-list;
      li {
        margin-left: 10px;
        display: none;
        cursor: pointer;
        &:first-child {
          margin-left: 0;
          display: inline-block;
        }
      }
    }
    color: #666;
    &:hover {
      li {
        display: inline-block;
      }
    }
  }
  .comment-bar {
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    h4 {
      display: inline-block;
    }
    button {
      float: right;
      @include reset-btn-link;
      .iconfont {
        font-size: 18px;
      }
    }
  }
  img {
    border-radius: 50%;
    max-width: 60px;
    float: left;
  }
  .title {
    margin-bottom: 20px;
    i {
      font-size: 20px;
    }
  }
  .name {
    display: inline-block;
    margin-left: 10px;
  }
  .content {
    margin-top: 10px;
  }
  .info {
    display: inline-block;
    padding-left: 10px;
    color: #999;
  }
  .comment-item {
    padding-bottom: 20px;
    margin-bottom: 20px;
    // border-bottom: 1px solid #ccc;
  }
}
</style>
