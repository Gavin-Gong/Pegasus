 <template>
  <div id="app">
    <el-menu mode="horizontal">
      <!-- <span>logo</span> -->
      <el-menu-item index="1-1">Home</el-menu-item>
      <el-menu-item index="1-2">Topics</el-menu-item>
      <el-menu-item index="1-3">Archives</el-menu-item>
      <el-menu-item index="1-4">Tags</el-menu-item>
      <el-menu-item index="1-5">About</el-menu-item>
      <el-input
        class="search-bar"
        placeholder=""
        icon="search"
        v-model="search">
      </el-input>
    </el-menu>
    <el-card>
      <el-row :gutter="10">
        <el-col v-if="lg$" :xs="0" :sm="0" :md="8 " :lg="4">
          <profile></profile>
        </el-col>
        <el-col :xs="8" :sm="12" :md="8" :lg="{span: 16, offset: 0}">
          {{ screenWidth }}
          <router-view></router-view>
        </el-col>
        <el-col v-if="screenWidth > 992" :xs="0" :sm="12" :md="8" :lg="4">sidebar</el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>

import { Row, Col, Menu, MenuItem, Input } from 'element-ui';
import screenMixin from 'mixins/screen';
import Profile from './pages/components/profile';

Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Input);

export default {
  components: {
    Profile,
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
#app {
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
}
</style>
