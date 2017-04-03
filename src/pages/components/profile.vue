<template>
  <el-card class="profile">
    <img :src="avatar" alt="" class="avatar">
    <h2 class="name">{{name}}</h2>
    <p class="bio">{{bio}}</p>
    <p class="address"><x-icon type="map-marker" color="#333"></x-icon> {{address}}</p>
    <el-button @click="handleFollow" class="mt-s">Follow Me</el-button>
    <ul class="data">
      <li>
        <h3>221</h3>
        <p>Posts</p>
      </li>
      <li>
        <h3>53</h3>
        <p>Days</p>
      </li>
    </ul>
    <ul class="social-list">
      <li v-for="item in socials">
        <a :href="item.link" target="_blank">
          <x-icon :type="item.type" size="2x" color="#222"></x-icon>
        </a>
      </li>
    </ul>
  </el-card>
</template>

<script>
import { Card, Button, MessageBox } from 'element-ui';
import XIcon from 'components/Icon';

Vue.use(Card);
Vue.use(Button);

export default {
  components: {
    XIcon,
  },
  data() {
    return {
      name: 'linux',
      avatar: require('assets/images/avatar.png'),
      bio: 'Web developer',
      address: 'Hunan, China',
      socials: [
        { link: 'http://github.com', type: 'github' },
        { link: '', type: 'weixin' },
        { link: 'http://zhihu.com', type: 'weibo' },
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

<style lang="scss" scoped>
.profile {
  text-align: center;
  box-shadow: none;
  .avatar {
    max-width: 100px;
    border-radius: 50%;
  }
  .name {
    font-size: 28px;
  }
  .address {
    margin-bottom: 10px;
    color: #333;
    font-size: 14px;
  }
  .social-list {
    list-style: none;
    margin-left: -20px;
    // margin-top: 25px;
    padding: 30px 0 10px;
    li {
      padding-left: 0;
      margin-left: 20px;
      display: inline-block;
    }
  }
  .data {
    list-style: none;
    margin-left: -20px;
    margin-right: -20px;
    margin-top: 20px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    li {
      display: inline-block;
      padding: 20px;
    }
  }
}
</style>
