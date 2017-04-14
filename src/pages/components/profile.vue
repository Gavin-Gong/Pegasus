<template>
  <div id="profile" ref="wrapper">
    <div class="affix-wrapper" :style="isAffix ? affixStyle : {}">
      <el-card class="profile-data">
        <div class="avatar-wrapper">
          <img :src="profile.avatar" alt="" class="avatar">
        </div>
        <h2 class="name">{{profile.name}}</h2>
        <p class="bio">{{profile.bio}}</p>
        <p class="address"><x-icon type="map-marker" color="#333"></x-icon> {{profile.address}}</p>
        <el-button @click="handleFollow" class="mt-s">Follow Me</el-button>
        <ul class="data">
          <li>
            <h3>{{ profile.post_count }}</h3>
            <p>Posts</p>
          </li>
          <li>
            <h3>{{ profile.streak_day_count }}</h3>
            <p>Days</p>
          </li>
        </ul>
        <ul class="social-list" v-if="profile.socials.length">
          <li v-for="item in profile.socials">
            <a :href="item.link" target="_blank">
              <x-icon :type="item.type" size="2x" color="#222"></x-icon>
            </a>
          </li>
        </ul>
      </el-card>
      <!--<el-card class="netease">-->
      <!--<div class="player-wrapper">
        <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height=450 src="//music.163.com/outchain/player?type=0&id=398331989&auto=0&height=430"></iframe>
      </div>-->
    </div>
    <!--</el-card>-->
  </div>
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
      affixStyle: {
        position: 'fixed',
        // width: getComputedStyle(document.querySelector('#profile')).width,
      },
      isAffix: false,
    };
  },
  created() {
    this.$store.dispatch('fetchProfile');
  },
  mounted() {
    // ref
    // const profileEle = document.querySelector('#profile');
    // TODO: affix
    // window.onscroll = () => {
    //   console.log(profileEle.getBoundingClientRect());
    // };
    // this.affixStyle.width = getComputedStyle(profileEle).width;
  },
  methods: {
    handleFollow() {
      MessageBox.alert('welcome follow me', window.innerWidth);
    },
  },
  computed: {
    profile() {
      return this.$store.state.profile.data;
    },
  },
};
</script>

<style lang="scss">
@import '~styles/mixins';
#profile {
  min-height: 1px;
  .affix-wrapper {
    // position: absolute;
    // position: fixed;
    // top: 0;
    // width: inherit;
    .profile-data {
      text-align: center;
      box-shadow: none;
      .avatar-wrapper {
        margin: auto;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #eee;
        .avatar {
          max-width: 100px;
          border-radius: 50%;
        }
      }
      .name {
        font-size: 22px;
      }
      .bio {
        line-height: 1.4;
      }
      .address {
        margin-bottom: 10px;
        color: #333;
        font-size: 14px;
        @include line-clamp(1);
      }
      .social-list {
        list-style: none;
        margin-left: -20px;
        // margin-top: 25px;
        padding: 30px 0 10px;
        border-top: 1px solid #eee;
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
        li {
          display: inline-block;
          padding: 20px;
        }
      }
    }
    .player-wrapper {
      margin-left: -10px;
      margin-top: 20px;
      iframe {
        width: calc(100% + 9px)
      }
    }
  }
}
</style>
