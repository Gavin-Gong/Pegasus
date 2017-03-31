<template>
  <el-card class="profile">
    <img :src="avatar" alt="" class="avatar">
    <p class="bio">{{bio}}</p>
    <p class="address"><i class=""></i>{{address}}</p>
    <el-button @click="handleFollow" class="mt-s">Follow Me</el-button>
    <ul class="social-list">
      <li v-for="item in socials">
        <a :href="item.link" target="_blank">{{item.type}}</a>
      </li>
    </ul>
  </el-card>
</template>

<script>
import { Card, Button, MessageBox } from 'element-ui';

Vue.use(Card);
Vue.use(Button);

export default {
  data() {
    return {
      avatar: require('assets/images/avatar.png'),
      bio: 'Web developer',
      address: 'Hunan, China',
      socials: [
        { link: 'github.com', type: 'Github' },
        { link: '', type: 'Wechat' },
        { link: 'zhihu.com', type: 'zhihu' },
      ],
    };
  },
  methods: {
    handleFollow() {
      MessageBox.alert('welcome follow me', window.innerWidth);
    },
  },
};
</script>

<style lang="scss">
.profile {
  text-align: center;
  .avatar {
    max-width: 100px;
    border-radius: 50%;
  }
  .address {
    margin-bottom: 10px;
    color: #333;
    font-size: 14px;
  }
  .social-list {
    list-style: none;
    li {
      padding-left: 0;
      display: inline-block;
    }
  }
}
</style>
