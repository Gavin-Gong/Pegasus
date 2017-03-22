 <template>
  <div id="app">
    <img src="./assets/logo.png">
    <el-button>ggg</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
import { Button } from 'element-ui';
import { encodeQuery, decodeQuery } from './utils';
import { dribbble } from './config';

Vue.use(Button);

export default {
  name: 'app',
  data() {
    return {

    },
  },
  created() {
    if (!this.isAuth) {
      this.saveDribbbleCode();
    }
  },
  methods: {
    saveDribbbleCode() {
      if (location.search) {
        localStorage.setItem('DRIBBBLE_CODE', decodeQuery(location.search).code);
      }
    },
    fetchToken() {
      this.$http.post('https://dribbble.com/oauth/token', {
        client_id: dribbble.client_id,
        client_secret: dribbble.client_secret,
        code: localStorage.getItem('DRIBBBLE_CODE'),
      }).then(({ data }) => {
        localStorage.setItem('DRIBBBLE_TOKEN', data.token);
      });
    },
  },
  computed: {
    authUrl() {
      const baseUrl = 'https://dribbble.com/oauth/authorize';
      const object = {
        client_id: dribbble.client_id,
        scope: 'public write comment upload',
        // redirect_uri: 'https://www.baidu.com',
      };
      return `${baseUrl}?${encodeQuery(object)}`;
    },
    isAuth() {
      const code = localStorage.getItem('DRIBBBLE_CODE');
      return code && code !== 'undefined';
    },
  },
};
</script>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
