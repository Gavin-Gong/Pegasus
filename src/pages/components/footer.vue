<template>
  <div class="footer">
    <p>© 2017 Gavin-Gong</p>
    <p>Powered By Vuejs</p>
  </div>
</template>

<script>
import { Card, Button, MessageBox } from 'element-ui';

Vue.use(Card);
Vue.use(Button);

export default {
  methods: {
    handleFollow() {
      MessageBox.alert('welcome follow me', window.innerWidth);
    },
  },
};
</script>

<style lang="scss">
.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding-top: 40px;
  padding-bottom: 25px;
  height: 120px;
  // background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
  text-align: center;
}
</style>
