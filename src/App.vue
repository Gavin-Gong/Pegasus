 <template>
  <div id="app">
    <div class="main-content">
      <!--<top-nav></top-nav>-->
      <div class="body-wrapper"
        >
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
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
  metaInfo() {
    return {
      title: '',
    };
  },
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
  margin-bottom: 200px;
}
#app {
  // text-align: center;
  .main-content {
    margin: 0 auto;
    // padding: 0 20px;
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
      @include res-to(xs) {
        margin: 80px auto;
      }
    }
  }
}
</style>
