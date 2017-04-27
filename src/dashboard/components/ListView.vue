<template>
  <div class="list-view">
    <el-col :span="5">
      <el-input class="search-bar" :placeholder="`Search ${this.type}`"></el-input>
      <div ref="container" class="list-container">
        <ul ref="list">
          <li
            v-for="(item, index) in listData"
            @click="choosePost(item, $event)">
            <a>{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </el-col>
    <!-- TODO -->
    <!--loadMore-->
  </div>
</template>

<script>
  import { Input, Row, Col } from 'element-ui';
  import Ps from 'perfect-scrollbar';
  import 'perfect-scrollbar/dist/css/perfect-scrollbar.min.css';

  Vue.use(Input);
  Vue.use(Row);
  Vue.use(Col);
  export default {
    created() {
      this.$store.dispatch(this.dispatchType, { query: { _limit: 20 } }).then(() => {
        // this.$emit('active', data[0]);
        this.$refs.list.children[0].click();
        console.log('clicked');
      });
    },
    props: {
      type: {
        type: String,
        required: true,
        default: 'post',
      },
    },
    mounted() {
      Ps.initialize(this.$refs.container);
    },
    methods: {
      choosePost(data, event) {
        [].forEach.call(this.$refs.list.children, (item) => {
          item.classList.remove('is-active');
        });
        event.currentTarget.classList.add('is-active');
        this.$emit('active', data);
      },
    },
    computed: {
      dispatchType() {
        if (this.type === 'article') {
          return 'fetchArticleList';
        } else if (this.type === 'topic') {
          return 'fetchTopicList';
        } else if (this.type === 'tag') {
          return 'fetchTagList';
        }
        console.error('error type');
        return '';
      },
      listData() {
        return this.$store.state[this.type].list;
      },
    },
  };
</script>

<style lang="scss" scoped>
@import '~styles/mixins';
.list-view {
  .is-active {

  }
  .search-bar {
    margin-top: 10px;
    margin-left: 20px;
  }
  .list-container {
    position: relative;
    overflow: scroll;
    height: 100vh;
    ul {
      // overflow: scroll-y;
      // margin-top: 10px;
      li {
        border-top: 1px solid #ccc;
        cursor: pointer;
        // border-bottom: 1px solid #ccc;
      }
      .is-active {
        background: rgba(26, 188, 156, 0.2);
      }
    }
  }
  a {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 20px;
    line-height: 60px;
  }
}
</style>
