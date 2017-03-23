<template>
  <el-card>
    <el-button @click="handleFollow">Follow Me</el-button>
  </el-card>
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

</style>
