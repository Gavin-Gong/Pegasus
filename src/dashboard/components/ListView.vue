<template>
  <div class="list-view">
    <el-col :span="5">
      <!--<el-input class="search-bar" :placeholder="`搜索 ${this.type}`"></el-input>-->
      <div class="search-bar">
        <slot name="search"></slot>
      </div>
      <div ref="container" class="list-container">
        <ul ref="list">
          <li
            v-for="(item, index) in data"
            :key="index"
            :class="$route.params.id == item.id && $route.name === routeName ? 'is-active' : ''"
            @click="handleRoute(item)">
            <a>{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </el-col>
    <slot name="more"></slot>
  </div>
</template>

<script>
  import { Input, Col } from 'element-ui';
  import Ps from 'perfect-scrollbar';
  import 'perfect-scrollbar/dist/css/perfect-scrollbar.min.css';

  Vue.use(Input);
  Vue.use(Col);
  export default {
    props: {
      data: {
        type: Array,
        required: true,
        default() {
          return [];
        },
      },
      routeName: {
        type: String,
        required: true,
      },
    },
    mounted() {
      Ps.initialize(this.$refs.container);
      /* eslint-disable*/
      // const state = this.data.filter(item => item.id == this.$route.params.id);
      // this.$emit('active', ...state);
    },
    methods: {
      handleRoute(data) {
        this.$router.push({ name: this.routeName, params: { id: data.id } });
        this.$emit('active', data);
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
