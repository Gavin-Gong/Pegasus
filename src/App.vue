 <template>
  <div id="app">
    <div class="main-content">
      <top-nav></top-nav>
      <!--<el-row :gutter="20" class="main-body">
        <el-col v-if="lg$" :xs="0" :sm="0" :md="8 " :lg="5">
          <profile></profile>
        </el-col>
        <el-col :xs="8" :sm="12" :md="8" :lg="{span: 15, offset: 0}">
          <router-view></router-view>
        </el-col>
        <el-col v-if="screenWidth > 992" :xs="0" :sm="12" :md="8" :lg="4">
          <side-bar></side-bar>
        </el-col>
      </el-row>-->
      <div class="body-wrapper">
        <router-view></router-view>
      </div>
    </div>
    <x-footer></x-footer>
    <back-top></back-top>
  </div>
</template>

<script>

import { Row, Col } from 'element-ui';
import screenMixin from 'mixins/screen';
import BackTop from 'components/BackTop';
import Profile from './pages/components/profile';
import XFooter from './pages/components/footer';
import TopNav from './pages/components/top-nav';
import SideBar from './pages/components/sidebar';

Vue.use(Row);
Vue.use(Col);

export default {
  components: {
    Profile,
    XFooter,
    TopNav,
    SideBar,
    BackTop,
  },
  mixins: [screenMixin],
  data() {
    return {
      search: '',
    };
  },
  methods: {
  },
  watch: {
  },
};
</script>

<style lang='scss'>
@import '~styles/index';
html {
  position: relative;
  min-height: 100%;
}
body {
  margin-bottom: 120px;
}
#app {
  // text-align: center;
  .main-content {
    margin: 0 auto;
    max-width: 1366px;
    // display: inline-block;
    text-align: left;
    .search-bar {
      width: 200px!important;
      height: 60px;
      input {
        margin-top: 10px
      }
      @include res-to(20, 360) {
        display: none;
      }
    }
    .main-body {
      margin-right: 0!important;
      padding-left: 20px;
      padding-right: 20px;
    }
    .body-wrapper {
      margin: 100px auto;
      max-width: 920px;
    }
  }
}
</style>
