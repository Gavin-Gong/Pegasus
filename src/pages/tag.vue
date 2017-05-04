<template>
  <div id="tag">
    <x-banner :background="tag.banner" :count="tag.post_count" :title="tag.title">
      <template slot="more">
        <!--<li><i class="iconfont icon-create">创建标签</i></li>-->
        <li @click="editTag"><i class="iconfont icon-edit"> 编辑标签</i></li>
        <li @click="deleteTag"><i class="iconfont icon-delete" style="color: rgba(255, 0, 0, .6)"> 删除标签 </i></li>
      </template>
    </x-banner>
    <ul class="article-list">
      <li class="" v-for="(article, index) in tag.posts" :key="index">
        <article-card
          :article="article"
          line-clamp>
        </article-card>
      </li>
      <placeholder v-if="tag.posts && !tag.posts.length">
        <h3>已经没有文章了</h3>
      </placeholder>
    </ul>
  </div>
</template>

<script>
  import { deleteTag } from 'api/tag';
  import { MessageBox } from 'element-ui';
  import ArticleCard from 'components/article';
  import XBanner from './components/banner';
  import Placeholder from './components/placeholder';

  export default {
    name: 'tag',
    components: {
      ArticleCard,
      XBanner,
      Placeholder,
    },
    data() {
      return {
      };
    },
    activated() {
      this.$store.dispatch('fetchTag', this.$route.params.id);
    },
    beforeRouteUpdate(to, from, next) {
      this.$store.dispatch('fetchTag', this.$route.params.id);
      next();
    },
    methods: {
      fetchTags() {

      },
      deleteTag() {
        /*eslint-disable*/
        MessageBox.confirm('确认删除该标签？')
        .then(() => {
          return deleteTag(this.$route.params.id);
        }).then(() => {
          this.$msg.success('删除成功!');
          this.$store.dispatch('fetchTagList');
          this.$router.push({name: 'Tags'});
        }).catch(() => {
          this.$msg.info('未删除!');
        });
      },
      editTag() {
        this.$router.push({name: 'DbTag', params: {id: this.$route.params.id}});
      },
    },
    computed: {
      background() {
        return {
          background: `url(${this.tag.banner}) 0 / cover fixed`,
        };
      },
      tag() {
        return this.$store.state.tag.detail;
      },
    },
  };
</script>

<style lang="scss" scoped>
@import '~styles/mixins';
#tag {
  overflow: hidden;
  .tag-info {
    overflow: hidden;
    text-align: center;
    color: #fff;
    position: relative;
    height: 100px;
    margin: -10px;
    padding: 60px 0 30px;
    h1 {
      color: #fff;
      font-size: 40px
    }
    .tag-banner {
      @include blur-mask();
      // box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12), 0px 0px 6px 0px rgba(0, 0, 0, 0.04);
    }
  }
  .article-list {
    margin-top: 40px;
    li {
      margin: auto;
      width: 99%;
    }
  }
}
</style>
